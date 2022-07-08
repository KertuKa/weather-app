import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Toggle.scss';
import './Styles/Weather.scss';
import './Styles/Errors.scss';
import './Styles/FirstPage.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
