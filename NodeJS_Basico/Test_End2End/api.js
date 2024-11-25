import { once } from "node:events"
import {createServer} from "node:http"
import JWT from 'jsonwebtoken'

const DEFAULT_USER = {
    //usuario generico para verificacao.
    user: 'Jonas',
    password: '123'
}

const JWT_Key = '212563'

async function loginRouter(req, res){
    const {user, password} = JSON.parse(await once(req, 'data'))
    console.log({user, password})

    // verifica se o usuario é valido.
    if(user !== DEFAULT_USER.user || password !== DEFAULT_USER.password ){
        res.writeHead(401)
        res.end(JSON.stringify({error: 'usuario invalido!!'}))
        return;
    }

    const token = JWT.sign({user, message:'Mensagem ñ criptografada do JWT'}, JWT_Key)

    res.end(JSON.stringify({token}))
}

async function handler(req, res) {
    
    if(req.url ==='/login' && req.method === 'POST'){
        return loginRouter(req,res)
    } 

    res.end("Handler ativo")    
}

const app = createServer(handler) // para permitir usar os testes.
.listen(3035,()=>console.log("Servidor Ativo"))

export {app}