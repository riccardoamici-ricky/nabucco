import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'

import { default as i18n } from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'it'],
    fallbackLng: "en",
    detection: { 
        order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
        caches: ['cookie']
    },
    backend: {
        loadPath: '/assets/locales/{{lng}}/translation.json'
    },
	interpolation: {
        format: function(value, format, lng) {
            if (format === 'duplicate') {
            	return value.map(v => v * 2).join(' | ');
            }
            return value;
        }
    },
  });

  const loadingMarkup = (
    <div><h2>Loading..</h2></div>
)

ReactDOM.render(
	<Suspense fallback={loadingMarkup}>
	<React.StrictMode>
    <Router>
			<App />
    </Router>
	</React.StrictMode>
	</Suspense>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
