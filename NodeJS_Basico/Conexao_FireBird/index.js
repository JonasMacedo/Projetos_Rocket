import express from "express"
import cors from "cors"
import { fbOptions } from "./db.js"
import  Firebird  from "node-firebird";

const app = express()

app.use(express.json())
app.use(cors())

app.get("/lista",(req,res)=>{
    
    Firebird.attach(fbOptions, function(err, db) {
        
        if (err){
           return res.status(502).json(err)
        }

        // res.status(200).send('Listando produtos:\n')
    
        // db = DATABASE
        db.query('SELECT codigo, descricao FROM testprodutogeral', function(err, result) {

            db.detach();
            
            if (err){
                return res.status(406).json(err)
            }else{
                return res.status(200).json(result)            
            }

        });
    
    });
})


app.listen(3033,()=>{console.log('Servidor ativo\nDesativar: CTRL+C')})