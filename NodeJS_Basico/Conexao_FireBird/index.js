import express from "express"
import cors from "cors"
import { findItems } from "./db.js" // importando a funcao de busca.

const app = express()

app.use(express.json())
app.use(cors())


//Rotas
app.get("/lista", function(req,res){
    findItems('SELECT codigo, descricao FROM testprodutogeral', [], function(error, result){
        if (error) {
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})


app.listen(3033,()=>{console.log('Servidor ativo\nDesativar: CTRL+C')})