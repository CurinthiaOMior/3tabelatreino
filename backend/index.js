const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const T1controller = require('./controller/tabela1.controller')
const T2controller = require('./controller/tabela2.controller')
const Trelacaocontroller = require('./controller/tabelaRelacao.controller')
const hostname = 'localhost'
const PORT = 3000

//midleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//rotas
//tabela1
app.get('/tabela1', T1controller.cadastrar)
app.get('/tabela1/:id', T1controller.consultarPorId)
app.put('/tabela1/:id', T1controller.atualizar)
app.delete('/tabela1/:id', T1controller.excluir)
//tabela2 
app.get('/tabela2', T2controller.cadastrar)
app.get('/tabela2/:id', T2controller.consultarPorId)
app.put('/tabela2/:id', T2controller.atualizar)
app.delete('/tabela2/:id', T2controller.excluir)
//tabelaRelacao
app.get('/tabelaRelacao', Trelacaocontroller.cadastrar)
app.get('/tabelaRelacao', Trelacaocontroller.listar)

// server
conn.sync()
.then(()=>{
    app.listen(PORT,hostname, ()=>{
        console.log(`aplicação rodando em: http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.log('erro ao rodar a aplicação')
})