Informacoes adicionais "Index".

Rotas é o direcionamento das URLs conforme o conteudo acessado de um site.

Toda vez que o servidor HTTP recebe uma requisição a função de callback/arrow function 
que foi usada no método createServer é executada. 

Entao sera postos as condições para respostas de diferentes requisições, conforme o 
endereço desejado pelo usuario. 

Vamos começar criando uma resposta para a nossa pagina HOME e demais rotas.

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
 servidor.listen(dor,host,()=>{console.log('Servidor ativo')})

----------------------------------////----------------------------------////----------------------------------

Informacoes adicionais "Index02"

Usando Express para gerenciamento de rotas, primeira instale a biblioteca:

- npm install express --save
Com o Express adicionado ao projeto, devera ser definido cada rota, com o metodo correspondente.
    
    app.get('/',(req,res)=>{ // sera definido uma metodo GET para cada rota da aplicacao.
        res.send('<h1>Pagina Home</h1>')
    })

Desta forma simplifica e diminuiu de forma siginificativamente a quantidade de codigo.

