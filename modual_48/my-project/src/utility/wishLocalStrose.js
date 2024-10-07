const wishGetStrose = () =>{
    const storApplication = localStorage.getItem('wish-application');

    if(storApplication){
        return JSON.parse(storApplication);
    }
    return [];

}

const wishSetStrose = (id) =>{
    const storApplication = wishGetStrose();

    const exit = storApplication.find(bookId => bookId === id );
    if(!exit){
        storApplication.push(id)
        localStorage.setItem('wish-application',JSON.stringify(storApplication))
    }
}

export {wishGetStrose, wishSetStrose}