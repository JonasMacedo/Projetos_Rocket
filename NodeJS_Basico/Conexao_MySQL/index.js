import express from "express"
import cors from "cors"
import {allClients} from './db.js'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send('Pagina Home')
})

app.get("/allClients",(req,res)=>{
    
    // res.sendStatus(200).json(allClients())

    const clientes = async()=>{ 
        await allClients()
    }
    console.log(clientes)
    res.sendStatus(200).json(clientes)
   
})

app.listen(3035,()=>{console.log("Servidor MySQL ativo\nPara desativar: Ctrl+C")})

