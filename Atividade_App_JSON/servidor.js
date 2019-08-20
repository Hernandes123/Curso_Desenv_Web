const porta = 4003
const express = require('express')
const app = express()
const filtro = require('./todo_resultado')
//CONFIGURAÇÕES DE CORS
app.use(function(req, res, next){
    res.header('Acess-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-with, Content-Type, Accept')
    next()
})

app.get('/', function(req, res, next){{
    res.send(filtro.resposta)
}})

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}` )
})