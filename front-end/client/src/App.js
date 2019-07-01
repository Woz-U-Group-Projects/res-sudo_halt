import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OspView from "./pages/OspView"
import './css/App.css';


function App(){
  return(
    <Router>
    <div>
      <Switch>
        <Route exact path="/osp" component={OspView} />
      </Switch>
    </div>
  </Router>
  )
}

export default App;
