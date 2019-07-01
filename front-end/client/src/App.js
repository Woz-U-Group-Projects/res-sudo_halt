import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OspView from "./pages/OspView";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from './components/NotFound';
import './css/App.css';

function App(){
  return(
    <Router>
    <div>
      <Switch>
        <Route path="/osp" component={OspView} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/404" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  </Router>
  )
}

export default App;
