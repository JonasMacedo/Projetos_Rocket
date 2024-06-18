import mongodb, {MongoClient} from 'mongodb'
import express from 'express'

const app = express()
const mongoAdmin = mongodb
console.log(mongoAdmin)

const urlMongo = "mongodb+srv://jonasmdcarvalho:<password>@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"



app.listen(3035, ()=>{console.log('Servidor ativo \nPara desativar Ctrl+C')})