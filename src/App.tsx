import React from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { RouterProvider } from 'react-router-dom';
import { privateProter, router } from './router';
import LkState from './components/LkState/LkState';


function App() {
    return (
        <React.StrictMode>
            <LkState>
                <RouterProvider router={privateProter} />
                <RouterProvider router={router} />
            </LkState>
        </React.StrictMode>
    );
}

export default observer(App);
