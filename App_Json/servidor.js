const porta = 3003
const filtro = require('./lista')
const express = require('express')
const app = express()


app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin')
    res.header('Access-Control-Allow-Headers','origin,x-Requested-with, Content-type, Accept')
    next()
})
//FUNÇÃO PARA ACESSO DOS FILTROS
app.get('/', function(req, res, next){
    res.send(filtro.resultado)
})
//CONFIGURAÇÃO DE FUNCIONAMENTO DO APP DA PORTA 3003, CONFORME LINHA 1
app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})

