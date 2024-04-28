const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Sejam bem-vindos ao meu site!")
})

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1> <br>Produto 1")
   
})

app.get("/consulta/:parametro", function(req,res){
    res.send("Retorno consulta: " + req.params.parametro);
})

app.get("/cadastro/:nome?", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Produto " + nome + " criado!</h1>");   
    }else{
        res.send("Produto nao cadastrado.........")
    }
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Eroo ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})