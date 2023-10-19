import React, { createContext, useState } from 'react';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    // Set up state
    const [myState, setMyState] = useState();
    const [tokenAuth, setTokenAuth] = useState("");
    const [user, setUser] = useState("");
    
    // Return the provider with the context value and children
    return (
        <MyContext.Provider value={{
            myState,
            setMyState,
            tokenAuth,
            setTokenAuth,
            user,
            setUser,
        }}>
            {children}
        </MyContext.Provider>
    );
};
