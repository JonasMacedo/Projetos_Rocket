import express from "express"
import cors from "cors"
import {addClient, allClients, updateClient} from './db.js'

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

app.put("/updateClient", async (req,res)=>{
    
    let iD = req.body.id
    let client = [req.body.nome, req.body.idade, req.body.sobrenome]

    if ( isNaN(iD)) {
        res.status(400).json(`o ID ${iD} é do tipo: ${typeof iD}, e o cliente é do tipo ${typeof client}`)
    }else{
         await updateClient(iD, client)
        res.json(`Cliente ${iD} atualizado`);
    }

})
    
app.listen(3035,()=>{console.log("Servidor MySQL ativo\nPara desativar: Ctrl+C")})

