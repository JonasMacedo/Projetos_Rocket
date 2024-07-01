import express from 'express'

import { addUser, allUsers } from './db.js' 

const app = express()
app.use(express.json())

app.post('/adduser', async (req, res)=>{

    let userDados = req.body
    let user = await addUser(userDados)

    return res.status(201).json(user)

})

app.get('/getusers', async (req, res)=>{

    let all = await allUsers()
    return res.status(200).json(all)

})


app.listen(3035, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})