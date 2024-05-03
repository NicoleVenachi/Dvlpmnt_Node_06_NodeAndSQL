
const http = require('http'); 

const hostname = 'localhost';
const PORT = 3000;

const server = http.createServer((req, res) => {
  const {url} = req;
  console.log(url);

  if (url === '/translations') {
    const translations = {
      1: 'one',
      2: 'two',
      3: 'three'
    }

    //hheader del response para JSON
    res.setHeader('Content-Type', 'application/json');

    //data Tx (stream of data)
    res.write(JSON.stringify(translations));

    res.end();
  }
  res.end('Welcome to Node!')
})

server.listen(PORT, hostname, () => {
  console.log(`Server listening on ${hostname}:${PORT}`);
});