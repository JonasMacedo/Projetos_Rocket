informacões

Para trabalhar com banco de dados MySQL, primeira sera necessario instalar as dependencia.

- npm install mysql2 --save.
- npm install 

Ao se comunicar com bancos sera muito utilizado funcoes assincronas, promisses etc, devido 
haver consultas no banco.

Quando utilizar rotas com metodos assincronos precisará definir a rota como assincrona tbm.

app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    res.json(clientes)
})

JWT - JSON Web Token.
Quando estamos trabalhando com API’s, nós precisamos pensar na segurança no momento de trafegar 
os dados, e principalmente no nível de permissão que cada usuário deverá ter. 

O JWT é um método que representa a comunicação segura entre duas partes. 
Esse token é composto por três partes: cabeçalho(Header), carga útil(Payload) e assinatura(Signature).
Elas são separadas por “.”

Instalando dependencia do JWT no projeto.
- npm i jsonwebtoken


Links de leitura:
https://www.alura.com.br/artigos/o-que-e-json-web-tokens?srsltid=AfmBOorXHwPg5lYnNl05QMHl6G_fzKCFw6HUtUXIkKxwahanFCqUaZ_I
https://programadriano.medium.com/json-web-token-jwt-c469834849a8
https://medium.com/@filipefilpe/nodejs-autentica%C3%A7%C3%A3o-com-jwt-6e274fb205dc
https://dev.to/gabrielhsilvestre/o-basico-jwt-json-web-token-2akc