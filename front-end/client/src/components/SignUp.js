import React, { Component } from "react";
import "../css/style.css";
import { signup } from "../userRepository";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      firstName: "",
      lastName: ""
      // users: []
    };
  }

  // RENDER ALL USERS
  // componentDidMount() {
  //      getAllUsers.call(this)
  //      .catch(err => console.log(err));
  //      console.log("componentDidMount", this.state.users);
  // }

regexChecker = () => {
    let email = document.getElementById("email").value;
    const regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
    if (email.match(regEx)) { 
      alert("Yay!");    
    } else {
      alert("Oh no! That's an invalid format!");
    }
  }

  // SIGN UP USER POST REQUEST
  handleSignUp = e => {
    e.preventDefault();
    this.regexChecker();
    signup(this.state).catch(err => alert("Error: User Already Exists!"));
  };

  //  SET STATE TO INPUT BOXES
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container signup">
        <div className="row">
          <div className="col-lg-7 my-auto">
            <h2 className="features-headline ">Sign Up Features</h2>
            <ul className="li-signup-features">
              <li className="signup-item">List your open source project</li>
              <li className="signup-item">Become a contributor</li>
              <li className="signup-item">Rate and provide feedback</li>
            </ul>
          </div>
          <div className="col-lg-5 form-container my-auto">
            <form className="signup-form">
              {/* EMAIL */}
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={this.handleChange}
                  name="email"
                  required
                />
              </div>
              {/* USERNAME */}
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                  name="username"
                  required
                />
              </div>
              {/* PASSWORD */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  name="password"
                  required
                />
              </div>
              {/* FIRST NAME */}
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  name="firstName"
                  required
                />
              </div>
              {/* LAST NAME */}
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                  name="lastName"
                  required
                />
              </div>
              {/* SUBMIT SIGN UP */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSignUp}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
