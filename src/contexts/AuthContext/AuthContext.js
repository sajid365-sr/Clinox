
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase/Firebase.config';




export const UserContext = createContext();
const auth = getAuth(app);


const AuthContext = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

 // Email/Password sign up
 const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

// Email/password login
const signIn = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// Google/Facebook/GitHub sign up
const providerLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
}

// Logout
const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }

}, []);

const AuthInfo = {user, loading, signIn, providerLogin, logOut, createUser, setUser}


    return (
        <UserContext.Provider value={AuthInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;