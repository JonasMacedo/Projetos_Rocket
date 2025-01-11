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
    //console.log({user, password})

    // verifica se o usuario é valido.
    if(user !== DEFAULT_USER.user || password !== DEFAULT_USER.password ){
        res.writeHead(401)
        res.end(JSON.stringify({error: 'usuario invalido!!'}))
        return;
    }

    const token = JWT.sign({user, message:'Mensagem ñ criptografada do JWT'}, JWT_Key)

    res.end(JSON.stringify({token}))
}

function isHeadersValid(headers) {
    // console.log({headers})// verifica o Header.
    try {
        const auth = headers.authorization.replace(/bearer\s/ig, '')
        JWT.verify(auth, JWT_Key)
        return true
    } catch (error) {
        // console.log({error})
        return false
    }
}

async function handler(req, res) {
    
    if(req.url ==='/login' && req.method === 'POST'){
        return loginRouter(req,res)
    } 

    if (!isHeadersValid(req.headers)) {
        res.writeHead(400)
        return res.end(JSON.stringify({error: 'Token invalido!!'}))
    }

    // res.end("Handler ativo")    
    res.end(JSON.stringify({result: "Bem Vindo!"}))  // para simular uma rota privada.  
}

const app = createServer(handler) // para permitir usar os testes.
.listen(3035,()=>console.log("Servidor Ativo"))

export {app}