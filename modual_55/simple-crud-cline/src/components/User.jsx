import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);


    const handleDelete = (_id) =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }
    
    
    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p className="my-3" key={user._id}>{user.name}: {user.email}
                    <Link to={`/update/${user._id}`} className="hover:btn-secondary btn btn-sm mx-2">Update</Link> 
                    <button onClick={()=>handleDelete(user._id)}className="hover:text-red-600 btn btn-sm">X</button></p>)
                }
            </div>
        </div>
    );
};

export default User;