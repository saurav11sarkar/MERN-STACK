import { useEffect, useState } from "react"
import Book from "./Book";
// import Book from "./Book";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
  return (
    <>
    <div className="my-5">
        <h2 className="text-center text-4xl font-bold">Books</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {
            books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
    </div>
    </>
    
  )
}

export default Books