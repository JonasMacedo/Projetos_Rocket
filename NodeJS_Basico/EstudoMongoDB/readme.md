## Como adicionar a dependencia

Para trabalhar com banco de dados MongoDB, primeira sera necessario instalar as dependencia.

- npm install mongodb


## Como configurar: 

Podera ler mais a respeito no site do NPM contendo a documentacao da biblioteca
- https://www.npmjs.com/package/mongodb


Sera incessario adicionar as biblitecas no projeto:
- import mongodb, {MongoClient} from 'mongodb'

Conectando com o base do MongoDB que esta em nuvem:

const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"

const clientMongo = new MongoClient(urlMongo)
const dbName = 'estudonodejs'

async function connectMongo(){
    await clientMongo.connect()
    clientMongo.db("estudonodejs")
    console.log('conectado ao MongoDB')
}



Ao se comunicar com bancos sera muito utilizado funcoes assincronas, promisses etc, devido 
haver consultas no banco.

Quando utilizar rotas com metodos assincronos precisará definir a rota como assincrona tbm.

app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    res.json(clientes)
})

