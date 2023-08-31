//import express

const express = require('express')
const app = express()

// Get e Post

app.get('/', (requisicao, resposta) => {
    resposta.send('<h1>Bem vindo ao meu site</h1>')
})