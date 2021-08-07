import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PizzaConfigurator from './PizzaConfigurator';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import {Integrations} from '@sentry/tracing';

Sentry.init({
    dsn: "https://e9cadd0010764a70b8f57b044057272d@o948162.ingest.sentry.io/5897381",
    release: process.env.REACT_APP_SENTRY_RELEASE, // Нам важна вот эта строчка
    autoSessionTracking: true,
    integrations: [new Integrations.BrowserTracing()],

// Set tracesSampleRate to 1.0 to capture 100%
// of transactions for performance monitoring.
// We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <PizzaConfigurator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
