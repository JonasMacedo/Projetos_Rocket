import express from "express"
import cors from "cors"
import {dbOptions} from "./db.js"
import firebird from "node-firebird"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send('Pagina Home')
})

app.get("/produtos",(req,res)=>{
    
    firebird.attach(dbOptions, function(err, db) {
        
        if (err){
            return res.status(500).json(err)
        }
        
        res.status(200).send('Listando Produtos:')
        
        // Realizando a consulta no banco do FireBird
        db.query('SELECT codigo, descricao FROM testprodutogeral', function(err, result) {
            // IMPORTANT: close the connection
            db.detach();
            
            if (err){
                return res.status(500).json(err)
            }else{
                return res.status(200).json(result)
            }
            
        });
    
    });

})

app.listen(3033,()=>{console.log("Servidor ativo\nPara desativar: Ctrl+C")})

