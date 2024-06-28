import express from 'express'
import {MongoClient} from 'mongodb'

import mongoose from 'mongoose'
import User from './Models/users.js'

const app = express()
app.use(express.json())

const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
const clientMongo = new MongoClient(urlMongo)

app.post('/adduser', async (req, res)=>{

    let user = req.body

    let newUser = await User.create(user)
    return res.json(newUser)

})

app.get('/getusers', async (req, res)=>{

    let allUser = await User.find()
    return res.json(allUser)

})

/*
async function connectMongo(){ //Conectado direto pelo MONGO.
    await clientMongo.connect()
    clientMongo.db("estudonodejs")
    console.log('conectado ao MongoDB')
    } 
    connectMongo()
*/
   
mongoose.connect(urlMongo)
.then(()=>{
    console.log('conectado ao MongoDB')       
}).catch(()=>{
    console.log('Falhou a conexão com o MongoDB')           
})

app.listen(3035, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})