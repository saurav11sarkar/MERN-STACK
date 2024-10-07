import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";


const Book = ({ book }) => {
    const { bookId, bookName, author, image, category, rating, tags } = book;
    return (
        <Link to={`/list/${bookId}`}>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure className="px-10 pt-10">
                    <div className='w-80 m-auto'>
                        <img
                            src={image}
                            alt="Shoes"
                            className="rounded-xl w-full" />
                    </div>
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-2 items-center '>
                        {
                            tags.map((tag, inx) => <button className='text-sm bg-slate-800 rounded-xl px-2 py-1 text-green-400' key={inx}>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className='flex justify-between'>
                        <p>{category}</p>
                        <p className='flex gap-2 justify-end items-center'>{rating} <CiStar /></p>
                    </div>
                </div>
            </div>
        </Link>
    )
};

Book.propTypes = {
    book: PropTypes.object,
};

export default Book;