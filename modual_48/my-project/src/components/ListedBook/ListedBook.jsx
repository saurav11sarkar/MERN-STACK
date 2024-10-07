import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStrose } from "../../utility/localStrose";
import ReadBook from "../Books/ReadBook";
import { wishGetStrose } from "../../utility/wishLocalStrose";
import WishBook from "../Books/WishBook";
import { Helmet } from "react-helmet-async";

function ListedBook() {
  const books = useLoaderData();
  const [activeTab, setActiveTab] = useState("Read Books");
  const [listBook, setListBook] = useState([]);
  const [listWish, setListWish] = useState([]);

  useEffect(()=>{
    const getStro = getStrose();
    if(getStro.length > 0){
      const applyStro = getStro.map(id => books.find(book => book.bookId === id))
      setListBook(applyStro)
    }
  },[books])

  useEffect(() => {
    const wishStro = wishGetStrose();
    if(wishStro.length > 0){
      const applyWish = wishStro.map(id => books.find(book => book.bookId === id))
      setListWish(applyWish)
    }
  },[books])
  return (
    <>
    <Helmet>
      <title>Book || List</title>
    </Helmet>
    <div className="bg-gray-800 max-w-screen-md m-auto rounded ">
      <div className="tabs">
        <a
          className={`tab tab-lifted ${activeTab === "Read Books" ? "tab-active text-green-500" : ""
            }`}
          onClick={() => setActiveTab("Read Books")}
        >
          Read Books
        </a>
        <a
          className={`tab tab-lifted ${activeTab === "Wishlist Books" ? "tab-active text-green-500" : ""
            }`}
          onClick={() => setActiveTab("Wishlist Books")}
        >
          Wishlist Books
        </a>

      </div>
      <div className="p-4 bg-gray-900">
        {activeTab === "Read Books" && <>
        {
          listBook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
        }
        </>}
        {activeTab === "Wishlist Books" && <>
        {
          listWish.map(book => <WishBook key={book.bookId} book={book}></WishBook>)
        }
        </>}
      </div>
    </div>
    </>
    

  )
}

export default ListedBook