import express from "express"
import cors from "cors"
import { findItems } from "./db.js" // importando a funcao de busca.

const app = express()

app.use(express.json())
app.use(cors())


//Rotas
app.get("/lista", function(req,res){

    let filtro = [] 
    let sql = 'SELECT codigo, descricao FROM testprodutogeral where codigo > 0 '

    if (req.query.descricao){ // verifica se foi informado um parametro na rota HTTP.
        
        // http://localhost:3033/lista?descricao=OLIVA&EXTRA

        sql+= "and descricao like ?"      
        filtro.push("%"+req.query.descricao+"%") // adicionando para o filtro.
    }

    findItems(sql, filtro, function(error, result){
        if (error) {
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

app.post("/add", function(req,res){

    let filtro = []
    let sql = 'update testprodutogeral set descricao = ?, codigo = ? where codigo > 0 '
    let valorCodigo = Number.parseInt(req.query.codigo)
    
    console.log(req.body.descricao, req.body.codigo)

     // http://localhost:3033/add?descricao=Andorinha&codigo=1055
    
    if (req.query.descricao && valorCodigo != 0 ){ // verifica se foi informado um parametro na rota HTTP.
        valorCodigo = Number.parseInt(req.query.codigo)
        // return console.log(valorCodigo, typeof valorCodigo)
        
        sql+= "and descricao like ?"      
            
        filtro.push("%"+req.query.descricao+"%") // adicionando para o filtro.
        filtro.push(valorCodigo) 
    }
    
    findItems(sql, filtro, function(error, result){
        if (error) {
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})


app.listen(3033,()=>{console.log('Servidor ativo\nDesativar: CTRL+C')})