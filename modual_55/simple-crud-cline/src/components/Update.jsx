import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUsers = useLoaderData();
    const handleUpdate = (even) => {
        even.preventDefault();
        const form = even.target;
        const name = form.name.value;
        const email = form.email.value;

        const updateUser = { name, email }
        console.log(updateUser)

        fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('user update successfully')
                }
            })

    }

    return (
        <div>
            <h3>Update information of {loadedUsers.name || 'not fount the name'}</h3>

            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                            <form className="card-body" onSubmit={handleUpdate}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" defaultValue={loadedUsers?.name} name='name' placeholder="Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" defaultValue={loadedUsers?.email} name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Update;