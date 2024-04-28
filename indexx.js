const express = require("express");
const app = express();

//primeira porta

app.get("/", function(req,res){
    res.send("Bem vindo ao meu site!");
})


//segunda porta

app.get("/consulta/", function(req,res){
    var cpf = req.query["cpf"];
        if (cpf){
            res.send("Retorno consulta: CPF - " + cpf);
        }else{
            res.send("CPF nao fornecido");
        }
    }
)
    
// terceira porta    

app.get("/cadastro/:nome?", function(req,res){
    var nome = req.params.nome;
    if (nome){
        res.send("<h1>Produto " + nome + " criado!</h1>");   
    }else{
        res.send("Produto nao cadastrado...");
    }
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Eroo ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.");
    }
})
