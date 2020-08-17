var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.sendFile(__dirname + "/html/index.html");
});

app.get("/", function(req, res){
   res.send("Seja bem-vindo ao meu App!")
});

app.get("/sobre", function(req, res){
  res.send("Minha pagina sobre");
});

app.get("/sobre2", function(req, res){
  res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
  res.send("Bem-vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome', function(req, res){
  res.send(req.params);
})

app.get('/ola2/:cargo/:nome', function(req, res){
  res.send(req.params.nome);
})

app.listen(8081, function(){
  console.log("Servidor Rodando na URL");
});
