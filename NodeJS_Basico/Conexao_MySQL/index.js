import express from "express"
import cors from "cors"


const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send('Pagina Home')
})

app.get("/produtos",(req,res)=>{
        

})

app.listen(3033,()=>{console.log("Servidor ativo\nPara desativar: Ctrl+C")})

