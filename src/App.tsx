import React, { createContext, useContext, useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { privateProter, router } from './router';
import user from './store/user';
import { getAuth } from 'firebase/auth';




function App() {
    const userSigned = user.isAuth();
    return (
        <React.StrictMode>
            <RouterProvider router={userSigned ? privateProter : router} />
        </React.StrictMode>
    );
}

export default observer(App);
