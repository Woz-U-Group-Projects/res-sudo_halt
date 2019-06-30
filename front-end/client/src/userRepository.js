import axios from 'axios';

const USER_BASE_URL = 'http://localhost:8080/api/user'

export function signup(data){
  console.log(data);
    return axios.post(`${USER_BASE_URL}/register`, {email: data.email, username: data.username, password:data.password, firstName:data.firstName, lastName:data.lastName} )
            .then(response => response.data);
}