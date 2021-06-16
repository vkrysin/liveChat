const fetch = require('node-fetch');

let url = 'http://murmuring-eyrie-38642.herokuapp.com/'

async function get(url) {

  await fetch(url + 'users')
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(err => console.log(err))
}

get(url)
