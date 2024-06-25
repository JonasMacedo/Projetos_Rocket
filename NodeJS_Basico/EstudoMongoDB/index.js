

import express from 'express'
import mongodb, {MongoClient} from 'mongodb'

const app = express()
const mongoAdmin = mongodb


const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
// const urlMongo = "mongodb%2Bsrv%3A%2F%2Fjonasmdcarvalho%3A%3CNodejs%3E%40estudonodejs.jg2bdpr.mongodb.net%2F%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3DEstudoNodeJs"
const clientMongo = new MongoClient(urlMongo)
const dbName = 'estudonodejs'

async function connectMongo(){
    await clientMongo.connect()
    clientMongo.db("estudonodejs")
    console.log('conectado ao MongoDB')
}
connectMongo()

app.listen(3035, ()=>{console.log('Servidor ativo \nPara desativar Ctrl+C')})