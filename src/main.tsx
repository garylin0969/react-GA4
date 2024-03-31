import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GTMAnalytics } from './utils/gtm.ts';

const GTMId = '123123123123';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {GTMId && <GTMAnalytics GTMId={GTMId} />}
        <App />
    </React.StrictMode>
);
