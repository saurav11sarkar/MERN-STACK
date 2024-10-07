import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../../fireBase/fireBase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const handleSignin = async () => {
        try {
            const result = await signInWithPopup(auth, googleprovider);
            const useLonIn = result.user
            console.log(useLonIn)
            setUser(useLonIn)

        } catch (error) {
            console.log(Error)
        }
    }

    const handleGitHubSignin = async () => {
        try {
            const result = await signInWithPopup(auth, githubprovider);
            const userResult = result.user
            setUser(userResult)
        } catch (error) {
            console.log(error);
        }
    }


    const handleSignout = async () => {
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-center items-center gap-4">
            {
                user ?
                    <button onClick={handleSignout} className="btn">Google Logout</button> :
                    <>
                        <button onClick={handleSignin} className="btn">Google Login</button>
                        <button onClick={handleGitHubSignin} className="btn">GitHub Login</button>

                    </>
            }
            {
                user && <div className="flex flex-col justify-center items-center">
                    <h2>user name : {user.displayName}</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;