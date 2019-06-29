import React, { Component } from "react";
import "../css/login.css";

function login(uname, pword) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            window.alert("Successful login");
            console.log("hi");
        } 
    };
    xhttp.open("POST", "http://localhost:8080/login", true);
    xhttp.send(JSON.stringify({username:uname,password:pword}));
}

class Login extends Component {
  render() {
    return (
        <div>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Username</label>
            <input name="username" type="text" id="inputEmail" className="form-control" placeholder="Username" required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            
            <button 
            className="btn btn-lg btn-primary btn-block" 
            type="submit" 
            onClick={
                ()=>login(
                    document.getElementById("inputEmail").value, 
                    document.getElementById("inputPassword").value
                    )
                }>Sign in</button>
        </div>
    );
  }
}



export default Login;