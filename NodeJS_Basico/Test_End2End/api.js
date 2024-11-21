import { once } from "node:events"
import {createServer} from "node:http"

const DEFAULT_USER = {
    //usuario generico para verificacao.
    user: 'Jonas',
    password: '123'
}

async function loginRouter(req, res){
    const {user, password} = JSON.parse(await once(req, 'data'))
    console.log({user, password})
    if(user !== DEFAULT_USER.user || password !== DEFAULT_USER.password ){
        res.writeHead(401)
    }
    res.end('ok')
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