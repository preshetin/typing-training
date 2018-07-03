import axios from 'axios';

class Api {

  constructor(token, userId) {
    this.token = token;
    this.userId = userId;
  }

  api() {
    return axios.create({
        baseURL: 'http://localhost:3000/api',
        timeout: 1000,
        headers: {'Authorization': this.token}
      })
  } 

  getUser() {
    return this.api().get(`/Users/${this.userId}`);
  } 
}

 export default Api; 
