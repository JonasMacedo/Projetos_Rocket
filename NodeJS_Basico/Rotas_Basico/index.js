
const http = require('http')
const dor = 3033

const servidor = http.createServer((req,res)=>{
    
    res.writeHead(200,{'Conten-Type': 'text/html'}) 
    
    if (req.url == '/') { // verificando as rotas.
        res.write('<h1>Pagina Home</h1>')
    } else if(req.url == '/pagina01'){
        res.write('<h1>Pagina 01</h1>')
    } if(req.url == '/pagina02'){
        res.write('<h1>Pagina 02</h1>')        
    }
    res.end()
})
servidor.listen(dor,()=>{console.log('Servidor ativo')})