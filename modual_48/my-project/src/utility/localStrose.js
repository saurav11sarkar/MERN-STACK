const getStrose = () =>{
    const stroApplication = localStorage.getItem('book-application')
    if(stroApplication){
        return JSON.parse(stroApplication)
    }
    return [];
    
}


const setStrose = (id) =>{
    const stroApplication = getStrose();
    const exit = stroApplication.find(bookId => bookId === id)
    if(!exit){
        stroApplication.push(id)
        localStorage.setItem('book-application', JSON.stringify(stroApplication))
    }
}

export {getStrose, setStrose};