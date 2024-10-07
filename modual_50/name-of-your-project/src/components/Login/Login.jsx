import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom"

const Login = () => {
    const [error, setError] = useState('');
    const [succesfuly, setSuccesfuly] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setError('');
        
        // add validation
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                if(user.emailVerified){
                    setSuccesfuly("User Loged in successFully");
                }else{
                    alert('please verify your email address');
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
        e.target.reset();
    }

    const heandleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            console.log('resert', emailRef.current.value);
            return
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            console.log('please write a valid email');
            return
        }

        // sed validitation email
        sendPasswordResetEmail(auth,email)
        .then(() =>{
            alert('please check your email')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}

                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700">
                            Password:
                        </label>
                        <div className="relative w-full">
                            <input
                                type={passwordShow ? 'text' : "password"}
                                id="password"
                                name="password"

                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                required
                            />
                            <span className="absolute text-sm top-2 right-3" onClick={() => setPasswordShow(!passwordShow)}>{passwordShow ? 'Hide' : 'Show'}</span>
                        </div>
                        {/* forget password */}
                        <label className="label">
                            <a href="#"
                                onClick={heandleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    {
                        error && <p className="text-red-600 font-semibold">Your password is worng</p>
                    }

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Login
                    </button>
                </form>
                {
                    succesfuly && <p className="text-green-600 font-semibold">{succesfuly}</p>
                }

                <p>New to this website Please <Link className="text-red-500" to={"/register"}>Register</Link> </p>

            </div>
        </div>
    );
};

export default Login;