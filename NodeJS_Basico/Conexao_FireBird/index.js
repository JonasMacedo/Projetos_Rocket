import express from "express"
import cors from "cors"
import { executeQuery } from "./db.js" // importando a funcao de busca.

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

    executeQuery(sql, filtro, function(error, result){
        if (error) {
            res.status(500).json(error)
        }else{
            res.status(200).json(result)
        }
    })
})

app.post("/add", function(req,res){

    let sql = 'INSERT INTO testprodutogeral(descricao, codigo) VALUES(?,?) RETURN CODIGO'
         
    console.log(req.body.descricao, req.body.codigo)

    executeQuery(sql,[req.body.descricao, req.body.codigo], function(error, result){
        if (error) {
            res.status(500).json(error)
        }else{
        res.status(200).json({codigo: result.codigo})
        }
    })
})


app.listen(3033,()=>{console.log('Servidor ativo\nDesativar: CTRL+C')})