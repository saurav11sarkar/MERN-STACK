import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const post = useLoaderData();
    return (
        <div>
            <h2>Post: {post.length}</h2>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-3">
            {
                post.map((post) => <Post key={post.id} post={post}></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;