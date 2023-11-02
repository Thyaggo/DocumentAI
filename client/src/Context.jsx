import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateToken } from './api/api';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('token') ? 
        JSON.parse(localStorage.getItem('token'))
     : null);
    const [chatid, setChatid] = useState( localStorage.getItem('chatid') ?
        JSON.parse(localStorage.getItem('chatid')): undefined
    );
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    // loading ? updateToken(token?.refresh) : '';
    // useEffect(() => {
        
    //     const time = 1000 * 60 * 5; // 5 minutos
    //     let interval = setInterval(() => {
    //         updateToken(token?.refresh)
    //         .then((res) => {
    //             console.log('Token actualizado');
    //             setToken({
    //                 ...token, // Mantén todos los valores existentes
    //                 access: res.data.access // Actualiza solo el valor de 'access'
    //                 });
    //             localStorage.setItem('token', JSON.stringify(token));
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    //         loading ? setLoading(false) : '';
    //     }, time);
    //     return () => clearInterval(interval);
    // }, [token, loading]);

    const Logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        navigate('/login');
    }

    return (
        <MyContext.Provider value={{
            setChatid,
            chatid,
            Logout,
            token,
            setToken,
            user,
            setUser,
        }}>
            {children}
        </MyContext.Provider>
    );
};
