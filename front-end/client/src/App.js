import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OspView from "./pages/OspView"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import './css/App.css';


function App(){
  return(
    <Router>
    <div>
      <Switch>
        <Route exact path="/osp" component={OspView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>
  )
}

export default App;
