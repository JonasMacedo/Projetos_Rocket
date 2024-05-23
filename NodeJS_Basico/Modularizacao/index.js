const express = require('express')
const rotas = require('./rotas')
const door = process.env.PORT || 3033 

const app = express()

app.use('/',rotas)

app.get('*',(req,res)=>{  
    // definindo a rota padrao.
    res.send('Pagina Home')
})

app.listen(door,()=>{console.log('Servidor ativo\nPara desativar prescione: Ctrl + C')})
