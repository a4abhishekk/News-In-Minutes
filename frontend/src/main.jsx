import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the '/client' part for React 18
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
