# Como adicionar a dependencia

Para trabalhar com banco de dados MongoDB, primeira sera necessario instalar as dependencia.
```
- npm install mongodb
```

# Como configurar: 

## Podera ler mais a respeito no site do NPM contendo a documentacao da biblioteca
- https://www.npmjs.com/package/mongodb


Sera necessario adicionar as biblitecas no projeto:
``` 
    import mongodb, {MongoClient} from 'mongodb' 
``` 

# Conectando com o base do MongoDB que esta em nuvem:

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

# Adicionando Mongoose 8.0.0
Mongoose é uma biblioteca com o função de simplifcar a intereção do MongoDB, pois ele é banco NoSQL, ele acaba guardando os dados como um JSON e por isso sua estrutura pode ser muito variada.

Poderá se informar mais lendo a documentação do mongoose:
- https://mongoosejs.com/

add a biblioteca:
``` - npm install mongoose ```

add a importação da biblioteca:
``` - import mongosse from 'mongoose' ```


Ao se comunicar com bancos sera muito utilizado funcoes assincronas, promisses etc, devido 
haver consultas no banco.

Quando utilizar rotas com metodos assincronos precisará definir a rota como assincrona tbm.
```
app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    res.json(clientes)
})
```
