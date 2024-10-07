import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {singIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        singIn(email, password)
        .then(result =>{
            const user = result.user;
            // navigate arfter login
            navigate(location?.state? location.state : '/');
        })
        .catch(error => console.error(error))

        e.target.reset()

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>

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

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't have an account <Link className="text-blue-600 font-bold" to={'/register'}>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;