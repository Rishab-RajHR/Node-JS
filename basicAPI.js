const http = require('http');

http.createServer((req, res) => {
     res.writeHead(200, {'Content-Type' : 'application\json'});
     res.write(JSON.stringify({name: 'Alex', dep: 'CS'}));
     res.end();
}).listen(1000);