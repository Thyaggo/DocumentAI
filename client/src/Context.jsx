import React, { createContext, useState } from 'react';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    // Set up state
    const [myState, setMyState] = useState();

    // Define any functions you want to pass down to consumers
    
    // Return the provider with the context value and children
    return (
        <MyContext.Provider value={{
            setMyState,
            myState
        }}>
            {children}
        </MyContext.Provider>
    );
};
