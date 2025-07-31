import express from "express"
import { createPost, feed, myPosts , likePost } from "../controllers/post.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


const postRouter = express.Router();

postRouter.get("/get-feed", protectRoute , feed)
postRouter.get("/my-posts" , myPosts)
postRouter.post("/create-post" , createPost)
postRouter.post("/like-post" , likePost)


export default postRouter