import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase_config';

export const UserContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const userWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider)
}

const userWithGithub = () =>{
    return signInWithPopup(auth, githubProvider)
}

const loggedInUserWithEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    });
    return () =>{
        unsubscribe();
    }
},[])

    const AuthInformation = {
        user,
        createUserWithEmail,
        loggedInUserWithEmail,
        userWithGoogle,
        userWithGithub,
        logOut,
        loading,
    }

    return (
        <UserContext.Provider value={AuthInformation}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContextProvider;