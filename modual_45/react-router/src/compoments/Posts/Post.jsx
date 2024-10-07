import PropTypes from 'prop-types';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();

    const hendleShowDetails = () =>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className='border-2 border-yellow-300 p-4 rounded-lg flex flex-col'>
            <h4 className='text-2xl'>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link className='text-blue-500 underline hover:text-white' to={`/posts/${id}`}>Post Detailes</Link>
            <button onClick={hendleShowDetails} className='btn btn-primary mt-4'>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object,
};

export default Post;