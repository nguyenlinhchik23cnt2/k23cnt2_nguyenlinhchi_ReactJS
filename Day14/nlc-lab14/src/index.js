import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NlcApp from './NlcApp';
import reportWebVitals from './reportWebVitals';

const NlcRoot = ReactDOM.createRoot(document.getElementById('NlcRoot'));
NlcRoot.render(
  <React.StrictMode>
    <NlcApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
