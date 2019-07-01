import axios from "axios";
import HostUrl from "./components/HostUrl";

// GET ALL USERS
export function getAllUsers() {
  return axios
    .get(`${HostUrl}`)
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
    return axios.post(`${HostUrl}/api/user/signup`, {email: data.email, username: data.username, password:data.password, firstName:data.firstName, lastName:data.lastName} )
            .then(response => response.data);
}

export function login(data) {
  console.log(data);
  return axios.post(`${HostUrl}/login`, {username: data.username, password: data.password})
    .then(response => response.data);
}

export function resetPassword(data) {
  console.log(data);
  // TODO: implement api
}

