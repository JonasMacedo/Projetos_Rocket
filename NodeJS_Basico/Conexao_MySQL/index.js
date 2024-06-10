import express from "express"
import cors from "cors"
import {addClient, allClients} from './db.js'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send('Pagina Home')
})

app.get("/allClients", async (req,res)=>{
    
    const clientes = await allClients()
    
    console.log(clientes)
    res.json(clientes)
    
})

app.post("/addClient", async (req,res)=>{
     
    var client = [req.body.nome, req.body.idade, req.body.sobrenome]

    //console.log(client)
    
    const newCliente = await addClient(client)
    res.json(newCliente)
    
})
    
app.listen(3035,()=>{console.log("Servidor MySQL ativo\nPara desativar: Ctrl+C")})

