import axios from "axios";
import {useState, useEffect} from 'react';
import Navbar from "../Components/Navbar";

export default function Home () {
    const [postList, setPostList] = useState([]);

   useEffect(() => {
    const fetchPostsFunc = async () => {
        const fetchPosts = await axios.get('http://localhost:8000/');
        setPostList(fetchPosts.data);
    }
    fetchPostsFunc();
   }, []);
    
   const postDisplay = postList.map(post=>{
    return <div className="w-48 border border-blue-700">
    <img src={post.picture_path}></img>
    <p>{post.description}</p>
    </div>
    
   });

    return (
        <>
        <div className="flex font-chivo relative">
            <Navbar />        
            <div className="flex flex-col items-center space-y-8 m-auto">
                {postDisplay}
            </div>
        </div>
        </>
    )

}