import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [regError, setRegError] = useState('')
    const [succesfuly, setSuccesfuly] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const chackBox = e.target.terms.checked;

        // reset error/succesfuly
        setRegError('')
        setSuccesfuly('')

        if (password.length < 6) {
            setRegError("You password should be at least 6 charcters or logher");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegError("Your password should be at lest upper case");
            return;
        }else if(!chackBox){
            setRegError('please accept our terms');
            return;
        }

        // Create user using Firebase Auth
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // console.log('User registered:', result.user);
                const user = result.user;
                sendEmailVerification(user)
                .then(()=>{
                    alert("Plase Your email varified")
                })
                .catch(error=>{
                    console.log(error.message);
                })

                updateProfile(user, { displayName: name })
                    .then(() => {
                        console.log('user profile updated with name name: ', name);
                        console.log(user)
                        setSuccesfuly(`${name} is succesfully register`)
                    })
                    .catch(error => {
                        // console.error('error update profile: ', error);
                        setRegError(error.message)
                    })

            })
            .catch(error => {
                // console.error('Error during registration:', error);
                setRegError(error.message)
            });

        e.target.reset()

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Registration</h2>
                <form className="space-y-4" onSubmit={handleRegister}>
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                        <span className="absolute right-3 top-2 text-sm" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword
                                ? "Hide" : "Show"}
                        </span>
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms" className="ml-2">Accept our <a href="#">Trem and Conditions</a></label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Register
                    </button>
                </form>
                {
                    regError && <p className="text-red-700 font-semibold">{regError}</p>
                }
                {
                    succesfuly && <p className="text-green-600 font-semibold">{succesfuly}</p>
                }
                <p>Already have an account? <Link className="text-red-600" to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
