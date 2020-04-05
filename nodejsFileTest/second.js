// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


var http = require('http');
var server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
})

server.listen(1337,'127.0.0.1');
console.log('Server listening at http://127.0.0.1:1337');


/* output 

node second.js
Server listening at http://127.0.0.1:1337


in browser

http://127.0.0.1:1337/
http://localhost:1337/

Hello World

*/