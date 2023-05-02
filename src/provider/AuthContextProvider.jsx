import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase/firebase_config';

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {

    const user = null;

const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const loggedInUserWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

    const AuthInformation = {
        user,
        createUserWithEmail,
        loggedInUserWithEmail
    }

    return (
        <UserContext.Provider value={AuthInformation}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContextProvider;