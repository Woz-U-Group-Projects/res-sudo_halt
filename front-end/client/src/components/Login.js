import React, { Component } from "react";
import "../css/login.css";
import { login } from "../userRepository";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    reportError(data) {
        console.log(data);
        document.getElementById("error-msg").innerHTML = "Invalid Login Credentials";
    }
    render() {
        return (
            <div>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Username</label>
                <input 
                    name="username" 
                    type="text" 
                    id="inputEmail" 
                    className="form-control" 
                    placeholder="Username" 
                    onChange={
                        ()=>this.setState({
                            username: document.getElementById("inputEmail").value
                        })
                    }
                    required autoFocus
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input 
                    name="password" 
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Password" 
                    onChange={
                        ()=>this.setState({
                            password: document.getElementById("inputPassword").value
                        })
                    }
                    required
                />
                
                <button 
                    className="btn btn-lg btn-primary btn-block" 
                    type="submit" 
                    onClick={
                        ()=>login(this.state)
                            .catch(err => this.reportError(err))
                            .then(document.getElementById("error-msg").innerHTML = "")
                    }
                >Sign in</button>
                <div id="error-msg"></div>
            </div>
        );
    }
}



export default Login;