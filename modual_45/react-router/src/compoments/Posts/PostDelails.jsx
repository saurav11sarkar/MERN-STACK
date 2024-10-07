import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDelails = () => {
    const postID = useLoaderData();
    const {postsid} = useParams();
    const navigate = useNavigate();
    const {id, title, body} = postID;

    console.log(postsid);

    const hendleGoback = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Post id: {id}</h1>
            <h2>{title}</h2>
            <h2>PostDetailes:{body}</h2>
            <button onClick={hendleGoback} className="btn btn-primary">Go back</button>
        </div>
    );
};

export default PostDelails;