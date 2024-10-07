import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContex);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // new user has been created
                const createTime = result.user?.metadata?.creationTime;
                const user = {email, createAt: createTime}
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'Content-type':'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data =>{
                    console.log(data)
                    if(data.insertedId){
                        alert('user added to the database');
                    }
                })
            })
            .catch(error => {
                console.log(error);
            });

            form.reset()
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
