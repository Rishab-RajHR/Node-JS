const http = require('http');

http.createServer((request,response) => {
     response.write("Hello From Node JS")
     response.end();
}).listen(1000)