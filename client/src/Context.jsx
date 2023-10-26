import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateToken } from './api/api';

// Create a new context
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem('token') ? {
        access: JSON.parse(localStorage.getItem('token')).access,
        refresh: JSON.parse(localStorage.getItem('token')).refresh,
    } : null);
    const [myState, setMyState] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    loading ? updateToken(token?.refresh) : '';
    useEffect(() => {
        
        const time = 1000 * 60 * 5; // 5 minutos
        let interval = setInterval(() => {
            updateToken(token?.refresh)
            .then((res) => {
                console.log('Token actualizado');
                setToken({
                    ...token, // Mantén todos los valores existentes
                    access: res.data.access // Actualiza solo el valor de 'access'
                    });
                localStorage.setItem('token', JSON.stringify(token));
            }).catch((err) => {
                console.log(err);
            });
            loading ? setLoading(false) : '';
        }, time);
        return () => clearInterval(interval);
    }, [token, loading]);

    const Logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        navigate('/login');
    }

    return (
        <MyContext.Provider value={{
            setMyState,
            myState,
            Logout,
            token,
            setToken,
        }}>
            {children}
        </MyContext.Provider>
    );
};
