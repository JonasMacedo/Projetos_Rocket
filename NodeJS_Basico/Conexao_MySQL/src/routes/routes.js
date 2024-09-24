import express from 'express'
import { allClients, addClient, updateClient, deletClient } from '../database/db.js' 

const route = express.Router()

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

export default(route)