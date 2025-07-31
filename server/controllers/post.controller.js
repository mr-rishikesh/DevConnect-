import Post from "../model/post.model.js";
import cloudinary from "../lib/cloudinary.js";

export const createPost = async (req, res) => {
  const { id ,   title, description, image,  tags } = req.body;
 // const id = req.user._id;
     let imageUrl;
        if(image) {
            // uploading to the cloudinary 
          const uploadResponse = await   cloudinary.uploader.upload(image)
          imageUrl = uploadResponse.secure_url
        }
  
  try {
    const newPost = new Post({
      posterId: id,

      title,
      description,
      image : imageUrl,
    
      tags,
    });
    await newPost.save();

    return res.status(201).json({
        message : "Sucessfully posted " ,
        data : newPost
    })
  } catch (error) {}
};

export const myPosts = async (req, res) => {
  const { userId } = req.body;
  try {
    const posts = await Post.find({posterId :userId});
    if (!posts) {
      return res.status(200).json({
        message: "No Posts found for this user",
      });
    }
    return res.status(200).json({
      message: "Successfully posts found for this user",
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      message: "something error in the myPosts ",
    });
  }
};

export const feed = async (req, res) => {
  const user = req.user;

  if (!user || !user._id) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    let feedPosts = [];

    // If user has interests, prioritize matching posts first
    if (user.interests && user.interests.length > 0) {
      const interestPosts = await Post.find({
        tags: { $in: user.interests },
        posterId: { $ne: user._id },
      }).sort({ upvotes: -1, createdAt: -1 });

      const otherPosts = await Post.find({
        $and: [
          { posterId: { $ne: user._id } },
          {
            $or: [
              { tags: { $exists: false } },
              { tags: { $eq: [] } },
              { tags: { $not: { $in: user.interests } } },
            ],
          },
        ],
      }).sort({ upvotes: -1, createdAt: -1 });

      feedPosts = [...interestPosts, ...otherPosts];
    } else {
      // If no interests, return all posts from other users
      feedPosts = await Post.find({
        posterId: { $ne: user._id },
      }).sort({ upvotes: -1, createdAt: -1 });
    }

    return res.status(200).json({
      message: "Feed fetched successfully",
      data: feedPosts,
    });
  } catch (error) {
    console.error("Feed error:", error);
    return res.status(500).json({
      message: "Something went wrong while fetching the feed.",
    });
  }
};

export const likePost = async (req , res) => {
   const { postId } = req.body;

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { upvotes: 1 } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "Post liked successfully",
      data: updatedPost,
    });
  } catch (error) {
    console.error("Error liking post:", error);
    return res.status(500).json({ message: "Error liking post" });
  }
};