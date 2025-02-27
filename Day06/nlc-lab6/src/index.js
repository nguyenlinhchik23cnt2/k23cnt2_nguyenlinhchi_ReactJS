import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NlcApp from './NlcApp';
import reportWebVitals from './reportWebVitals';

const nlcRoot = ReactDOM.createRoot(document.getElementById('nlcRoot'))
nlcRoot.render(
  <React.StrictMode>
    <NlcApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
