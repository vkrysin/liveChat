const http = require('http')
const url = require('url')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 8081;

// simple version
function parseRequest(fileName, req, res) {

  for (item of fileName) {

    let re = new RegExp(item)
    if (req.url.match(re) !== null) {
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")

      fs.readFile(`${item}.json`, (err, data) => {
        if (err) throw err
        res.end(JSON.stringify(JSON.parse(data)))
      })
      return
    }
  }
  res.statusCode = 200
  res.end(JSON.stringify({ a: 1 }));
}

const server = http.createServer((req, res) => {

  requestData = ["users", "comments"]
  parseRequest(requestData, req, res)

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
