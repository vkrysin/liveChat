const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3333;

const serverData = ['users', 'messages'];

fs.readdir(__dirname, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
/**
 * send JSON files which name is equal fileName
 * @param {string} fileName now available 'users', 'messages'
 * @param {*} req
 * @param {*} res
 */
function parseGetRequest(fileName, req, res) {
  for (item of fileName) {
    const re = new RegExp(item);
    if (req.url.match(re) !== null) {
      fs.readFile(`app/server/${item}.json`, (err, data) => {
        if (err) throw err;
        res.end(JSON.stringify(JSON.parse(data)));
      });
      return;
    }
  }
}
/**
 * send {isDuplicate: 'true'} if user already in user.json
 * otherwise add to user.json
 * @param {string} user
 * @param {*} res
 */
function addUserToDB(user, res) {
  const pathToUsers = 'app/server/users.json';

  fs.readFile(pathToUsers, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);

      if (obj.users.indexOf(user) != -1) {
        res.end(JSON.stringify({isDuplicate: 'true'}));
        return;
      }

      obj.users.push(user);
      json = JSON.stringify(obj);
      fs.writeFile(pathToUsers, json, (err) => {
        if (err) throw err;
      });
      res.end();
    }
  });
}
/**
 * delete userName from user.json
 * @param {string} userName
 */
function deleteUserFromDB(userName) {
  const pathToUsers = 'app/server/users.json';
  fs.readFile(pathToUsers, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      const usersArr = JSON.parse(data).users;
      userNamePosition = usersArr.indexOf(userName);

      const objUsers = JSON.parse(data);
      // delete item from array users
      objUsers.users.splice(userNamePosition, 1);

      json = JSON.stringify(objUsers);
      fs.writeFile(pathToUsers, json, (err) => {
        if (err) throw err;
      });
    }
  });
}
/**
 * add message to message.json
 * @param {string} message
 * @param {*} res
 */
function addMessageToDB(message, res) {
  const pathToUsers = 'app/server/messages.json';

  fs.readFile(pathToUsers, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      console.log(obj);
      obj.messages.push(message);
      json = JSON.stringify(obj);
      fs.writeFile(pathToUsers, json, (err) => {
        if (err) throw err;
      });
      res.end();
    }
  });
}
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'GET') {
    // parseGetRequest(serverData, req, res);
    res.end('Hello, World!');
  }
  if (req.method == 'PUT') {
    if (req.url.match(/users/g) !== null) {
      let user = '';
      req.on('data', (chunk) => {
        user += chunk;
      });
      req.on('end', () => {
        addUserToDB(JSON.parse(user).name, res);
      });
    }
    if (req.url.match(/message/g) !== null) {
      let message = '';
      req.on('data', (chunk) => {
        message += chunk;
      });
      req.on('end', () => {
        addMessageToDB(JSON.parse(message), res);
      });
    }
  }
  if (req.method == 'DELETE') {
    if (req.url.match(/users/g) !== null) {
      let user = '';
      req.on('data', (chunk) => {
        user += chunk;
      });
      req.on('end', () => {
        deleteUserFromDB(JSON.parse(user).name);
      });
    }
  }
  if ( req.method == 'OPTIONS') {
    res.end();
  }
}).listen(port);

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
