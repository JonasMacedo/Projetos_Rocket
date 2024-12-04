# informacões

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

# JWT - JSON Web Token.
Quando estamos trabalhando com API’s, nós precisamos pensar na segurança no momento de trafegar 
os dados, e principalmente no nível de permissão que cada usuário deverá ter. 

O JWT é um método que representa a comunicação segura entre duas partes. 
Esse token é composto por três partes: cabeçalho(Header), carga útil(Payload) e assinatura(Signature).
Elas são separadas por “.”

### Instalando dependencia do JWT no projeto.
> - npm i jsonwebtoken

- Cabecalho(Header) 
    - O Header consiste em duas partes encodados em Base64 sendo:

- O Tipo (JWT)
    - E o algoritmo de Hash que pode ser (HMAC SHA256 ou RSA).

- Carga Util(Payload) 
    - Os payloads são objetos JSON que contem os ***claims***, nessa parte que nós trabalhamos com os “pedidos”, carga de dados ou dados enviados. 
    - Existem 3 tipos de claims em Payloads: ***reserved***, ***public***, e ***private claims***.
        - Reserved claims: Atributos não obrigatórios(mas recomendados) que podem ser um conjunto de informações uteis e interoperáveis normalmente utilizados por protocolos de segurança em API’s:

        - “iss” (Issuer) Origem do token

        - “iat” (issueAt) Timestamp de quando o token foi gerado

        - “exp” (Expiration) Timestamp de quando o token expira

        - “sub” (Subject) Entidade a quem o token pertence, normalmente o ID do usuário

        - Public claims: São atributos que definem o uso do JWT e informações úteis para 
        a aplicação.

        - Private claims: São atributos definidos especialmente para compartilhar 
        informações entre aplicações.

### Links de leitura:
https://www.alura.com.br/artigos/o-que-e-json-web-tokens?srsltid=AfmBOorXHwPg5lYnNl05QMHl6G_fzKCFw6HUtUXIkKxwahanFCqUaZ_I
https://programadriano.medium.com/json-web-token-jwt-c469834849a8
https://medium.com/@filipefilpe/nodejs-autentica%C3%A7%C3%A3o-com-jwt-6e274fb205dc
https://dev.to/gabrielhsilvestre/o-basico-jwt-json-web-token-2akc

#### Link de video:
https://www.youtube.com/watch?v=D0gpL8-DVrc
