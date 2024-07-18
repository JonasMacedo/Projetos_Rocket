# Definição deste projeto:
 - Este projeto trata-se apenas de um backend NEM(Node.js,Express, MongoDB).
 - Contendo apenas um simples CRUD(Create, Read, UpDate e Delete), retornando dados em JSON.
 - Seguindo estruturas padrões(Router, Model, Controller).

## Bibliotecas usadas:
- Express e Router.
- MongoDB e Mongoose.

#### Oque é MongoDB:
- MongoDB é um banco NoSQL, ele acaba guardando os dados em uma estrutura parecida com um JSON e por isso sua estrutura pode ser muito variada.

- Poderá se informar mais lendo a documentação do mongoose: https://mongoosejs.com/

#### Como adicionar a dependencia:
- Para operar com banco de dados MongoDB, primeira sera necessario instalar as dependencia.
```
    - npm install mongodb
```

#### Como configurar: 

- Podera ler mais a respeito no site do NPM contendo a documentacao da biblioteca https://www.npmjs.com/package/mongodb


- Sera necessario adicionar as biblitecas no projeto:  ``` import mongodb, {MongoClient} from 'mongodb' ``` 

#### Conectando com o base do MongoDB que esta em nuvem:

````
const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"

const clientMongo = new MongoClient(urlMongo)
const dbName = 'estudonodejs'

async function connectMongo(){
    await clientMongo.connect()
    clientMongo.db("estudonodejs")
    console.log('conectado ao MongoDB')
}
````

## Adicionando Mongoose 8.0.0
-   Mongoose é uma biblioteca ORM com o função de simplifcar a intereção com o banco do MongoDB.

- add a biblioteca: ``` - npm install mongoose ```

- add a importação da biblioteca: ``` - import mongosse from 'mongoose' ```


- Ao se comunicar com bancos sera muito utilizado funções assincronas, promisses etc, devido 
haver consultas no banco e elas poderem levar alguns tempo para serem concluidas.

- Quando utilizar rotas com metodos assincronos precisará definir a rota como assincrona tbm.
```
app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    res.json(clientes)
})
```

