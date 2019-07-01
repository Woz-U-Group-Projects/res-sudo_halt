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
      lastName: "",
      errors: {
        email: "",
        password: ""
      }
      // users: []
    };
  }

  // RENDER ALL USERS
  // componentDidMount() {
  //      getAllUsers.call(this)
  //      .catch(err => console.log(err));
  //      console.log("componentDidMount", this.state.users);
  // }

  // SIGN UP USER POST REQUEST
  handleSignUp = e => {
    e.preventDefault();
    signup(this.state).catch(err => alert("Error: User Already Exists!"));
  };

  handleChange = e => {
    const { name, value } = e.target;
    let errors = this.state.errors;
    const validEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {});
  };

  render() {
    const { errors } = this.state;

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
                {errors.email.length > 0 && (
                  <span id="emailError" className="error">
                    {errors.email}
                  </span>
                )}
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
                {errors.password.length > 0 && (
                  <span id="passwordError" className="error">
                    {errors.password}
                  </span>
                )}
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
