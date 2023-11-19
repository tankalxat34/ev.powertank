import React from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';
import RouteMain from './routes/main/main';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { router } from './router';
import Header from './components/Header/Header';

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default observer(App);
