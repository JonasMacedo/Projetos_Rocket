import express, { json } from 'express'
import jsonwebtoken from 'jsonwebtoken'

import { allClients, addClient, updateClient, deletClient } from '../database/db.js' 

const route = express.Router()
const jwt = jsonwebtoken 
const SECRET = 'jwtSecret'

route.get("/",(req,res)=>{
    res.status(200).send('Pagina Home')
})

route.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    
    console.log(clientes)
    res.json(clientes)
    
})

route.post("/addClient", async (req,res)=>{
    
    var client = [req.body.nome, req.body.idade, req.body.sobrenome]
    
    //console.log(client)
    
    const newCliente = await addClient(client)
    res.json(newCliente)
    
})

route.put("/updateClient", async (req,res)=>{
    
    let iD = req.body.id
    let client = [req.body.nome, req.body.idade, req.body.sobrenome]

    if ( isNaN(iD)) {
        res.status(400).json(`o ID ${iD} é do tipo: ${typeof iD}, e o cliente é do tipo ${typeof client}`)
    }else{
        await updateClient(iD, client)
        res.json(`Cliente ${iD} atualizado`);
    }

})

route.delete("/deletClient", async (req,res)=>{
    let iD = parseInt(req.body.id)
    
    if ( isNaN(iD)) {
        res.status(400).json(`o ID ${iD} é do tipo: ${typeof iD}`)
    }else{
        await deletClient(iD)
        res.json(`Cliente ${iD} Removido`);
    }
    
})

route.post("/login", (req, res)=>{
    
    if(req.body.nome === 'Amanda' && req.body.sobrenome === 'Ripple'){
        console.log('Passou no login')
        
        const token = jwt.sign({userId:1}, SECRET, {expiresIn: 300}) // utilizando o JWT.

        return res.status(200).json({auth:true, token})
        
    }else{
        return res.status(401).send('Login não autorizado')        
    }
    
})

export default(route)