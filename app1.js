var http = require('http');

http.createServer(function(req, res){
  res.end("Olá");
}).listen(8081);

console.log("o servidor esta rodando!");
