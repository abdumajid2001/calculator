import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next";
import './translations/i18n'
import {getLanguage} from "./helper/persistance-storege";
import App from "./components/app/app";
import {BrowserRouter} from "react-router-dom";

i18next.changeLanguage(getLanguage())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
