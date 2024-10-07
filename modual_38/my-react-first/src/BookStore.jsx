import Book from "./Book"

function BookStore({book}){
    return (
        <div>
            <p>Book length: {book.length}</p>
        {
            book.map(boi => <Book book={boi}></Book>)
        }
        </div> 
    )
}

export default BookStore