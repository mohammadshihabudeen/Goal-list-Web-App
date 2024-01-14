import React from 'react';//import packages
import App from './App';//root element
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot
(document.getElementById('root'));//react render everything in root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);//comes from dom
