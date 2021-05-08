// import axios from 'axios'
const axios = require('axios');
const resource = 'http://127.0.0.1:8081'

const ApiService = {

  get(resource, slug="") {
    const headers = { "Content-Type": "application/json"}
    return axios.get(`${resource}/${slug}`, { headers })
  },

  put(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  }
}
export default ApiService;

export const ListUsersService = {
  get(resource, slug="") {
    return ApiService.get(resource, slug);
  },
  put(userName) { // userName - object { name: "someName"}
    return ApiService.put(resource, "users", userName);
  }
}
// console.log(ApiService.get('http://127.0.0.1:8081/', 'users')
//   .then(response => console.log(response.data)));

// console.log(axios.put('http://127.0.0.1:8081/users', { name: 'Pavel'}));
