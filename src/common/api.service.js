// import axios from 'axios'
const axios = require('axios');

const resource = 'http://morning-eyrie-13293.herokuapp.com';
// const resource = 'http://192.168.0.102:3333';

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
        {headers: {'Content-Type': 'application/json'},
          data: JSON.stringify(params)});
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

