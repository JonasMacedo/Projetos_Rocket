import express from "express"
import Firebird from "node-firebird"

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{

    res.status(200).send('Listando produtos:\n')
   

})

app.listen(3033,()=>{console.log('Servidor ativo\nDesativar: CTRL+C')})