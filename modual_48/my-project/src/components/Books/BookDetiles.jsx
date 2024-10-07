import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { setStrose } from "../../utility/localStrose";
import { wishGetStrose, wishSetStrose } from "../../utility/wishLocalStrose";

const BookDetails = () => {
    const [readClick, setReadClick] = useState(false);
    const [wishClick, setWishClick] = useState(false);
    

    const books = useLoaderData();
    const { bookId } = useParams();

    const Intid = parseInt(bookId);
    const book = books.find(book => book.bookId === Intid);

    const handleReadClick = () =>{
        
        if(wishClick){
            setStrose(Intid)
            toast.success("Successfully read the content!");
        }else{
            setReadClick(true)
            setStrose(Intid)
            toast.success("Successfully read the content!");
        }
    }

    const handleWishClick = () =>{
        if(readClick) {
            toast.error("Error: Wallet cannot be accessed after reading!");
        }else{
            setWishClick(true)
            wishSetStrose(Intid)
            toast.success("Successfully accessed the wallet!")
        }
    }


    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
            <div className="card card-side bg-gray-900 shadow-xl max-w-screen-md p-4 m-auto">
                <figure>
                    <div className="w-80 m-auto">
                    <img className="w-full"
                        src={image}
                        alt="Movie" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className="my-2">By : {author}</p>
                    <p>{category}</p>
                    <p className="my-2"><strong>Review :</strong> {review}</p>
                    <div className="flex gap-3 justify-start items-center">
                        <strong>Tag</strong>
                        {
                            tags.map((tag,inx) => <button className="text-green-400" key={inx}># {tag}</button>)
                        }
                    </div>
                    <ul className="my-2">
                        <li>Number of Pages    : {totalPages}</li>
                        <li>Publisher          : {publisher}</li>
                        <li>Year of Publishing : {yearOfPublishing}</li>
                        <li>Rating             : {rating}</li>
                    </ul>
                    <div className="card-actions justify-start gap-3">
                        <button onClick={handleReadClick} className="btn btn-outline">Read</button>
                        <button onClick={handleWishClick} className="btn btn-warning">Wishlist</button>
                        <ToastContainer />
                    </div>
                </div>
           </div>
    );
};

export default BookDetails;
