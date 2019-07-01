import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ChangePassword from "./components/ChangePassword";
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( <ChangePassword /> ,
    document.getElementById('root')
);