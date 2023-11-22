import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { RouterProvider } from 'react-router-dom';
import { privateProter, router } from './router';
import LkState from './components/LkState/LkState';
import { auth, db } from './firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';


export const dbContext = createContext({});

function App() {
    const [state, setState] = useState({} as User);
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            setState(data as User);
        })
    }, [])

    return (
        <React.StrictMode>
            <dbContext.Provider value={{
                ...state,
            }}>
                <RouterProvider router={!!state ? privateProter : router} />
            </dbContext.Provider>
        </React.StrictMode>
    );
}

export default observer(App);
