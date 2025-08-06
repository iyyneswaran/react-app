import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Car from './components/car';
import Bike from './components/bike';
import Header from './components/header';
// import Apple from './components/apple';
import reportWebVitals from './reportWebVitals';
import User from './components/user';
import Apple from './components/apple';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Bike /> */}
    <Header />
  </React.StrictMode>
);

reportWebVitals();
