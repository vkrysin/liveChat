// import axios from 'axios'
const axios = require('axios');
const resource = 'http://127.0.0.1:8081';

const ApiService = {

  get(resource, slug='') {
    const headers = {'Content-Type': 'application/json'};
    return axios.get(`${resource}/${slug}`, {headers});
  },
  put(resource, slug='', params) {
    const headers = {'Content-Type': 'application/json'};
    return axios.put(`${resource}/${slug}`, JSON.stringify(params), {headers});
  },
  delete(resource, slug='', params) {
    return axios.delete(`${resource}/${slug}`,
        {headers: {'Content-Type': 'application/json'}, data: JSON.stringify(params)});
  },
};
export default ApiService;

export const ListUsersService = {
  get(slug='') {
    return ApiService.get(resource, slug);
  },
};

export const ChatWindowService = {
  get(slug='') {
    return ApiService.get(resource, slug);
  },
  put(slug, params) {
    return ApiService.put(resource, slug, params);
  },
  delete(params) { // userName - object { name: "someName"}
    return ApiService.delete(resource, 'users', params);
  },
};
// console.log(ApiService.get('http://127.0.0.1:8081/', 'users')
//   .then(response => console.log(response.data)));

// console.log(axios.put('http://127.0.0.1:8081/users', { name: 'Pavel'}));
