const http = require('http')
const door = 3030
const url = require('url')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Pagina Home</h1>')
})

server.listen(door || 3033, ()=>{
    console.log('Servidor rodando\nPara derrubar o servidor: ctrl + c')
})