## Como adicionar a dependencia

Para trabalhar com banco de dados MongoDB, primeira sera necessario instalar as dependencia.

- npm install mongodb


## Como configurar: 

Podera ler mais a respeito no site do NPM contendo a documentacao da biblioteca
- https://www.npmjs.com/package/mongodb


Sera incessario adicionar as biblitecas no projeto:
- import mongodb, {MongoClient} from 'mongodb'

Ao se comunicar com bancos sera muito utilizado funcoes assincronas, promisses etc, devido 
haver consultas no banco.

Quando utilizar rotas com metodos assincronos precisará definir a rota como assincrona tbm.

app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    res.json(clientes)
})

