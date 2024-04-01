import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { GTMAnalytics } from './utils/gtm.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GTMAnalytics />
        <RouterProvider router={router} />
    </React.StrictMode>
);
