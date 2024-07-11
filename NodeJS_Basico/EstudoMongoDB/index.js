import express from 'express'

import { addUser, allUsers, deleteUser, findUser, upDateUser } from './db.js' 

const app = express()
app.use(express.json())

app.post('/adduser', async (req, res)=>{

    let userDados = req.body
    let user = await addUser(userDados)

    return res.json(user)

})

app.get('/getallusers', async (req, res)=>{
    
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

app.delete('/deleteuser/:id', async(req,res)=>{
    
    let {id} = req.params
    let user = await deleteUser(id)
    return res.status(200).json(user)
})

app.listen(3035, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})