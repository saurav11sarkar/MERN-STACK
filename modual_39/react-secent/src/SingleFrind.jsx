export default function SingleFrind({friends}){
    const {name, email} = friends;
    return (
        <div className="border-2 border-yellow-400 p-3 rounded-2xl m-2">
            <h6>Name : {name} </h6>
            <h6>Email : {email} </h6>
        </div>
    )
}