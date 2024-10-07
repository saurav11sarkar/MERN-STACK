import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkeAsRead }) => {
    const {id, title, cover, reading_time, author, author_image, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-2'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />

            <div className='flex justify-between mb-2 '>
                <div className='flex'>

                    <div className='w-14'>
                        <img className='w-full rounded-3xl' src={author_image} alt={`picture of the title ${title}`} />
                    </div>

                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2'> <IoBookmarksOutline /> </button>
                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash} </a></span>)
                }
            </p>
            <button onClick={() => handleMarkeAsRead(id,reading_time)} className='text-blue-600 underline font-bold'>markes as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkeAsRead: PropTypes.func.isRequired,
}

export default Blog;