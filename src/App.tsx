import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { privateProter, router } from './router';
import { auth, isAuth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


const Context = createContext({});


function App() {
    const [state, setState] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            console.log(data);
            setState({...data});
        })
    }, [])
    // const userSigned = isAuth();
    return (
        <React.StrictMode>
            <Context.Provider value={{
                state
            }}>
                <RouterProvider router={!!state ? privateProter : router} />
            </Context.Provider>
        </React.StrictMode>
    );
}

export default observer(App);
