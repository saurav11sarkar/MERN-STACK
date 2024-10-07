import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const hendleDelete = (id) => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    console.log('deleted Successfully');
                    const remaingUsers = users.filter(user => user._id !== id);
                    setUsers(remaingUsers);
                }
            })
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Logged In</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>
                                <button onClick={() => hendleDelete(user._id)} className="btn">X</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;