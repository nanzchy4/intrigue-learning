import React, { createContext, useState } from 'react';
import { getAuth,  createUserWithEmailAndPassword  } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();


const Context = ({children}) => {
    const [user, setUser] = useState({});

    const createAccount = (email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo ={user, createAccount}


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Context;