
import express from 'express'
import {MongoClient} from 'mongodb'
import {connectMongo} from './db'

const app = express()
const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
const clientMongo = new MongoClient(urlMongo)

/*
async function connectMongo(){ //Conectado direto pelo MONGO.
    await clientMongo.connect()
    clientMongo.db("estudonodejs")
    console.log('conectado ao MongoDB')
} 
*/

connectMongo()
// connectMongo()

app.listen(3035, ()=>{console.log('Servidor ativo \nPara desativar Ctrl+C')})