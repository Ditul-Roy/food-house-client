import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase_config';

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
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
        console.log(currentUser);
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