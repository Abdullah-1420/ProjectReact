import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Home from './Components/Home';
import Pationts from './Components/Pationts';
import Dignosis from './Components/Dignosis';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Pationts" element={<Pationts/>}/>
        <Route path="/Dignosis" element={<Dignosis/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
