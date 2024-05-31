import express from "express"
import cors from "cors"
import { executeQuery, fbOptions, Firebird, executeQueryTransaction } from "./db.js" // importando a funcao de busca.

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

    let sql = 'INSERT INTO testprodutogeral(descricao, codigo) VALUES(?,?) RETURNING CODIGO'
         
    console.log(req.body.descricao, req.body.codigo)

    executeQuery(sql,[req.body.descricao, req.body.codigo], function(error, result){
        if (error) {
            res.status(500).json(error)
        }else{
        res.status(200).json({codigo: result.codigo})
        }
    })
})

app.post("/pedidos", function(req,res){

    // Ira trabalhar com 2 tabelas, devera manter a integridade de ambas, precisara usar uma TRANSACAO.
    Firebird.attach(fbOptions, function(err, db) {
        
        if(err){
            return res.status(500).json(err)
        }
        
        // Ira realizar a transacao, caso consiga ira grava a operacao no banco, caso ñ consiga ira fazer o rollback desfazendo tudo.
        db.transaction(Firebird.ISOLATION_READ_COMMITTED, async function(err,transaction) {
            
            if(err){
                return res.status(500).json(err)
            }
            
            try { // ira tentar realizar a operacao.
                
                let ssql = "insert into tvenpedido(empresa, codigo, cliente, condicaopagto) values(?,?,?,?) returning idpedido"

                //Grava pedido
                let transacao = await executeQueryTransaction(transaction, ssql, [req.body.empresa, req.body.codigo, req.body.cliente, req.body.condicaopagto])
                let pedido = transacao.codigo
                
                transaction.commite(function(err){
                    if (err) {
                        transaction.rollback()
                        res.status(500).json(err)
                    }else{
                        res.status(201).json({codigo: pedido})
                    }
                })
            
            } catch (error) {
                transaction.rollback()
                res.status(500).json(error)
            }

            db.detach()

        })
    })
    
})


app.listen(3033,()=>{console.log('Servidor ativo\nDesativar: CTRL+C')})