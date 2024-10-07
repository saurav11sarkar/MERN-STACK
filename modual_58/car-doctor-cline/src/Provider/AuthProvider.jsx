import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null); 
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => { 
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const resetPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    };

    const singOutUser = () =>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); 
            setLoader(false);
            // console.log('Current user:', currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = { user, loader, createUser, signInUser, resetPassword, singOutUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;
