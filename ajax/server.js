const bodyparser = require('body-parser')

const express = require('express')
const app = express()

//Dentro do diretório atual sirva todos arquivos estáticos
app.use(express.static('.'))

//Usado para converter dados de formulãrio...
app.use(bodyparser.urlencoded({extended: true}))

//Transforma json em informação tratável de conversão
app.use(bodyparser.json())

app.get('/teste', (req , res) => res.send('Acesss ...'))

app.listen(3000, () => console.log('executando ...'))