import React, { useState } from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { router } from './router';
import Modal from './UI/Modal/Modal';

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default observer(App);
