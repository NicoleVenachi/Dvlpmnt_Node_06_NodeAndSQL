
const http = require('http'); 

const hostname = 'localhost';
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Welcome to Node!')
})

server.listen(PORT, hostname, () => {
  console.log(`Server listening on ${hostname}:${PORT}`);
});