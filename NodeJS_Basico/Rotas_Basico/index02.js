const express= require('express')
const app = express()

const door = 3030

app.get('/',(req,res)=>{ // sera definido uma metodo GET para cada rota da aplicacao.
    res.send('<h1>Pagina Home</h1>')
})

app.get('/pagina01',(req,res)=>{ 
    res.send('<h1>Pagina 01</h1>')
})

app.listen(door || 3033, ()=>{
    console.log('Servidor rodando\nPara derrubar o servidor: ctrl + c')
})
