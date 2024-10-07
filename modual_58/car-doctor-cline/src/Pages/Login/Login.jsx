import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { signInUser, resetPassword } = useContext(AuthContext);
    const emailRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; // fallback to home if no location state

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = { email };

                // Requesting JWT token from the server
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        if (res.data.success) {
                            // Navigate to previous location or home
                            navigate(from, { replace: true });
                        }
                    })
                    .catch((error) => {
                        console.error("Error fetching JWT token:", error);
                    });

                // Reset form after successful login
                form.reset();
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    const forgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please enter your email address first');
            return;
        }
        resetPassword(email)
            .then(() => {
                alert('Please check your email for password reset instructions');
            })
            .catch((error) => console.error("Password reset error:", error));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="Login illustration" />
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>

                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        onClick={forgetPassword}
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Login</button>
                            </div>
                        </form>
                        <p className="text-center">
                            New to Car Doctors?{" "}
                            <Link className="text-sky-400 font-semibold" to="/signup">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
