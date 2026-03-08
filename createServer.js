const http = require('http');

http.createServer((request,response) => {
     response.write("<h2>Hello From Node JS</h2>")
     response.end();
}).listen(1000)