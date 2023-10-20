import React, { createContext, useState, useEffect } from 'react';
import { updateToken } from './api/api';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('token')).refresh;
    const [myState, setMyState] = useState();
    // Return the provider with the context value and children

    if(token){
        (() => {
            let interval = setInterval(() => {
                console.log(token);
                updateToken(token)
                .then((res) => {
                    localStorage.setItem('token', JSON.stringify(res.data));
                }).catch((err) => {
                    console.log(err);
                });
            }, 300000);
            return () => clearInterval(interval);
        })();
    }

    return (
        <MyContext.Provider value={{
            setMyState,
            myState,
        }}>
            {children}
        </MyContext.Provider>
    );
};
