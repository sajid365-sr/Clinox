
import React, { createContext } from 'react';

export const UserContext = createContext();

const AuthContext = ({children}) => {





const AuthInfo = {name:'sajid', age:22}


    return (
        <UserContext.Provider value={AuthInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;