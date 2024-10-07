import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/fireBase.config';

export const AuthContext = createContext(null);
const googleProvide = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoader] = useState(true);

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvide)
    }

    const singOutuser = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscrive = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoader(false);
            // console.log('observing current user', user)
        })
        return () =>{
            unSubscrive()
        }
    }, [])

    const authInfo = { user, loading, createUser, singInUser, googleUser, singOutuser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;