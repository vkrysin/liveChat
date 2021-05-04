const fetch = require('node-fetch');

let url = 'http://127.0.0.1:8081/'

async function get(url) {

  await fetch(url + 'users')
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data.users);
    })
}

get(url)
