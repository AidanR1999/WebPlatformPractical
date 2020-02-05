var http = require('http');
console.log('Server started, ctrl + c to exit');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Hello World!');
    
}).listen(3000);
