import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Car from './components/car';
import Bike from './components/bike';
// import Apple from './components/apple';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <Bike />
  </React.StrictMode>
);

reportWebVitals();
