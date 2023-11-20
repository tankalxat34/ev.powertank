import React, { useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { privateProter, router } from './router';

function App() {
    const userSigned = false;
    return (
        <React.StrictMode>
            <RouterProvider router={userSigned ? privateProter : router} />
        </React.StrictMode>
    );
}

export default observer(App);
