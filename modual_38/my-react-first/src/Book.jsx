function Book({book}){
    const {name,price}= book;
    return ( 
        <div className="border-2 border-red-500 p-5 mt-4 rounded-full">
            <h3>Book Name : {name}</h3>
            <p>Book Price : {price}</p>
        </div>
    )
}

export default Book