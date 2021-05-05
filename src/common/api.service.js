// import axios from 'axios'
const axios = require('axios');

const ApiService = {

  get(resource, slug="") {
    const headers = { "Content-Type": "application/json" };

    return axios.get(`${resource}/${slug}`, { headers })

  },
  put(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  }
}
// console.log(ApiService.get('http://127.0.0.1:8081/', 'users')
//   .then(response => console.log(response.data)));

// console.log(axios.put('http://127.0.0.1:8081/', { hello: 'world' }));
