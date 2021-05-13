const http = require('http');
const url = require('url');
const fs = require('fs');

const hostname = '192.168.0.103';
const port = 8081;
const serverData = ["users", "messages"];
// simple version
function parseGetRequest(fileName, req, res) {

  for (item of fileName) {

    let re = new RegExp(item);
    if (req.url.match(re) !== null) {

      fs.readFile(`live-chat/server/${item}.json`, (err, data) => {
        if (err) throw err;
        res.end(JSON.stringify(JSON.parse(data)));
      })
      return
    }
  }
}

// db is .json file
function addUserToDB(user, res) {
  const pathToUsers = 'live-chat/server/users.json';

  fs.readFile(pathToUsers, 'utf8', function readFileCallback(err, data){
      if (err) {
          console.log(err);
      } else {
      obj = JSON.parse(data);

      if(obj.users.indexOf(user) != -1) {
        res.end(JSON.stringify({ isDuplicate: "true"}))
        return
      }

      obj.users.push(user);
      json = JSON.stringify(obj);
      fs.writeFile(pathToUsers, json, (err) => {
        if(err) throw err;
      });
      res.end()
  }});
}
function deleteUserFromDB(userName) {
  const pathToUsers = 'live-chat/server/users.json';
  fs.readFile(pathToUsers, 'utf8', function readFileCallback(err, data){
      if (err) {
          console.log(err);
      } else {
      let usersArr = JSON.parse(data).users;
      userNamePosition = usersArr.indexOf(userName)

      let objUsers = JSON.parse(data);
      // delete item from array users
      objUsers.users.splice(userNamePosition, 1)

      json = JSON.stringify(objUsers);
      fs.writeFile(pathToUsers, json, (err) => {
        if(err) throw err;
      });
  }});
}
function addMessageToDB(message, res) {
  const pathToUsers = 'live-chat/server/messages.json';

  fs.readFile(pathToUsers, 'utf8', function readFileCallback(err, data){
      if (err) {
          console.log(err);
      } else {
      obj = JSON.parse(data);
      console.log(obj);
      obj.messages.push(message);
      json = JSON.stringify(obj);
      fs.writeFile(pathToUsers, json, (err) => {
        if(err) throw err;
      });
      res.end()
  }});
}
const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'GET') {
    parseGetRequest(serverData, req, res);
  }
  if (req.method == 'PUT') {
    if (req.url.match(/users/g) !== null) {
      let user = '';
      req.on('data', (chunk) => {
        user += chunk;
      })
      req.on('end', () => {
        addUserToDB(JSON.parse(user).name, res);
      })
    }
    if (req.url.match(/message/g) !== null) {
      let message = '';
      req.on('data', (chunk) => {
        message += chunk;
      })
      req.on('end', () => {
        addMessageToDB(JSON.parse(message), res);
      })
    }
  }
  if (req.method == 'DELETE') {
    if (req.url.match(/users/g) !== null) {
      let user = '';
      req.on('data', (chunk) => {
        user += chunk;
      })
      req.on('end', () => {
        deleteUserFromDB(JSON.parse(user).name);
      })
    }
  }
  if( req.method == 'OPTIONS') {
    res.end();
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
