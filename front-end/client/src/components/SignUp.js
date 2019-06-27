import React, { Component } from "react";
import "../css/style.css";

class SignUp extends Component {
  render() {
    return (
      <div class="container signup">
        <div class="row">
          <div class="col-lg-7 my-auto">
            <h2 class = "features-headline ">Sign Up Features</h2>
            <ul class="li-signup-features">
              <li class="signup-item">List your open source project</li>
              <li class="signup-item">Become a contributor</li>
              <li class="signup-item">Rate and provide feedback</li>
              
            </ul>
            </div>
          <div class="col-lg-5 form-container my-auto">
            <form class="signup-form">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
              />
            </div>

            <div class="form-group">
              <label for="firstName">First Name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="First Name"
              />
            </div>

            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Last Name"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form></div>
         
        </div>
      </div>
    );
  }
}

export default SignUp;