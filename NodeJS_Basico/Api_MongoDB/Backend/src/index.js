import express from 'express'
import moongose from 'mongoose'

import UserModel from "./Models/users.js"
import connectMongoDB from './DataBase/connectdb.js'

const app = express()

app.use(express.json)


app.get('/users', async(req, res)=>{
    let allUsers = await UserModel.find()

    return res.json(allUsers)
})

/*
moongose.connect("mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs")
.then(()=>{console.log("Conseguiu conectar ao MongoDB!!")})
.catch(()=>{console.log("Falha na conexao com o MongoDB X")})
*/

connectMongoDB()
.then(()=>{
    app.listen(3035, ()=>console.log("Serivodr ativo!!\nPara desativar Ctrl+C"))
})
.catch(()=>console.log("Deu Ruim!! Pare o servidor Ctrl+C"))

//app.listen(3035, ()=>{console.log('Servidor ativo!!\nPara desativar Ctrl+C.')})

