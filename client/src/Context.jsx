import React, { createContext, useState, useEffect } from 'react';
import { updateToken } from './api/api';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    let token = JSON.parse(localStorage.getItem('token'));
    if(token){
        token = token.refresh;
    }
    const [myState, setMyState] = useState();
    const [login, setLogin] = useState(false);
    // Return the provider with the context value and children

    if(token){
        (() => {
            let interval = setInterval(() => {
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

    const Logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        setLogin(false);
    }

    return (
        <MyContext.Provider value={{
            setMyState,
            myState,
            login,
            setLogin,
        }}>
            {children}
        </MyContext.Provider>
    );
};
