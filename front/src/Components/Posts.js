import axios from "axios";
import {useState, useEffect} from 'react';

export default function Posts () {

const [postList, setPostList] = useState([]);

   useEffect(() => {
    const fetchPostsFunc = async () => {
        const fetchPosts = await axios.get('http://localhost:8000/');
        setPostList(fetchPosts.data);
    }
    fetchPostsFunc();
   }, []);
    
   const postDisplay = postList.map(post=>{
    return <div className="flex flex-col justify-around w-80 h-80 border border-blue-700">
    <img className="h-48 object-scale-down" src={post.picture_path}></img>
    <p className="p-4 overflow-auto">{post.description}</p>
    </div>
    
   });

return (
    <>
<div className="flex flex-col items-center space-y-8 m-auto">
                {postDisplay}
            </div>
            </>
)
}

