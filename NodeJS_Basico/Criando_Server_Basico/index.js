
// acesse o https://http.cat/ para verificar os status HTTP.

const http = require('http') // biblioteca oriunda do NodeJS.
const port = 3030 // definindo a porta que sera verificada.


http.createServer((req,resp)=>{
    
    console.log('Recebendo uma requisicao')

    resp.writeHead(200,{
        'Content-Type': 'text/plain' // tipo de retorno de conteudo.
    })
    resp.write('Basico de NodeJS\n')
    resp.end()
}).listen(port)