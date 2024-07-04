import express from 'express'

import { addUser, allUsers, findUser, upDateUser } from './db.js' 

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

app.get('/getuser/:id', async (req, res)=>{
    
    let {id} = req.params
    // console.log('Id informado: ', id)
    
    let user = await findUser(id)
    return res.status(200).json(user)
    
})

app.put('/attuser', async(req,res)=>{
    
    let user = await upDateUser(req.body)
    return res.json(user)
})

app.listen(3035, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})