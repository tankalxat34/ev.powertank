import React, { useEffect, useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { RouterProvider } from 'react-router-dom';
import { privateProter, router } from './router';
import LkState from './components/LkState/LkState';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';


function App() {
    const [state, setState] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            setState({ ...data });
        })
    }, [])

    return (
        <React.StrictMode>
            <RouterProvider router={!!state ? privateProter : router} />
        </React.StrictMode>
    );
}

export default observer(App);
