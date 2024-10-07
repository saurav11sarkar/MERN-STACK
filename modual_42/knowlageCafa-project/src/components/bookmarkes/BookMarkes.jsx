import PropTypes from 'prop-types';
import BookMark from '../bookmark/BookMark';

const BookMarkes = ({bookmarkes,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-200 ml-4 mt-2 pt-4'>
            <div>
                <h3 className='text-2xl text-center'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">
                Bookmarked Blogs: {bookmarkes.length}
            </h2>
            {
               bookmarkes.map((bookmarke,idx) => <BookMark key={idx} bookmark={bookmarke}></BookMark>) 
            }
        </div>
    );
};

BookMarkes.propTypes = {
    bookmarkes:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired,
};

export default BookMarkes;

