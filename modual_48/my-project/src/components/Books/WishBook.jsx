import PropTypes from 'prop-types';
import { FaClock } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineContactPage } from "react-icons/md";

const WishBook = ({ book }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-3 mb-3">
            <figure>
                <div className='w-40 m-auto'>
                    <img className='w-full'
                        src={image}
                        alt="Movie" />
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className='flex gap-2 justify-around'>
                    <strong>Tag</strong>
                    {
                        tags.map((tag, inx) => <button className='text-green-500' key={inx}># {tag}</button>)
                    }
                    <p className='flex gap-2 justify-center items-center'> <FaClock /> Year op publishing : {yearOfPublishing}</p>
                </div>
                <div className='flex gap-4 justify-around'>
                    <p className='flex gap-2 justify-center items-center'> <FcBusinessman /> Publisher : {publisher}</p>
                    <p className='flex gap-2 justify-center items-center'> <MdOutlineContactPage /> Page : {totalPages}</p>
                </div>
                <div className='border-b-2 border-gray-400 my-5'></div>
                <div className="card-actions justify-between">
                    <button className="px-2 rounded-3xl bg-sky-200 text-sky-700">Category : {category}</button>
                    <button className="px-2 rounded-3xl bg-yellow-200 text-yellow-600">Rating : {rating}</button>
                    <button className="px-2 rounded-3xl bg-green-600 text-white">view Details</button>
                </div>
            </div>
        </div>
    );
};

WishBook.propTypes = {
    book: PropTypes.object,
};

export default WishBook;