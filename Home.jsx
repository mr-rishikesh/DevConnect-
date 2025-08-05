import { useEffect } from "react";
import { usePostStore } from "../store/usePostStore.js"
import CreatePost from "../components/CreatePost.jsx";
import Post from "../components/Post.jsx";
import Footer from "./Footer.jsx";


export function Home()  {
    const {getFeedPosts , feedPosts} = usePostStore();

    useEffect (() => {
      
        getFeedPosts();
     

    }, [getFeedPosts]  )  
    //console.log("from home" +feedPosts);
    return (
        <>
        <CreatePost/>
        {feedPosts && feedPosts.map((post) => {
            return (
                <Post  post={post}/>
            )})
        }
        {/* Footer sec */}
        <Footer/>

        </>
    )
}