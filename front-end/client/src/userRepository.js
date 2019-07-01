import axios from "axios";

const URL = 'http://localhost:8080'

// GET ALL USERS
export function getAllUsers() {
  return axios
    .get(`${URL}`)
    .then(res => res.data)
    .then(data => {
      this.setState({
        users: data
      });
    });
}

// SIGN UP NEW USER
export function signup(data) {
  console.log(data);
    return axios.post(`${URL}/api/user/register`, {email: data.email, username: data.username, password:data.password, firstName:data.firstName, lastName:data.lastName} )
            .then(response => response.data);
}

export function login(data) {
  console.log(data);
  return axios.post(`${URL}/login`, {username: data.username, password: data.password})
    .then(response => response.data);
}

export function resetPassword(data) {
  console.log(data);
  // TODO: implement api
}

