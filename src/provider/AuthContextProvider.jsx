import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase_config';

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContextProvider = ({children}) => {

    const user = null;

const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

    const AuthInformation = {
        user,
        createUserWithEmail
    }

    return (
        <UserContext.Provider value={AuthInformation}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContextProvider;