const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Teste");
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("Minha pagina blog")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send("<h1>Nome: " + req.params.nome + "</h1>" + "<h2>Cargo: " + req.params.cargo + "<h2>")

})

app.listen(8082, function(){
    console.log("Servidor Rodando Na URL http://localhost:8082");
});
