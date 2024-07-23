
/* Sem o FastiFy
import {createServer} from 'node:http'
const server = createServer()
server.listen(3030, console.log(console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')))
*/

import { fastify } from "fastify"; 

const server = fastify()

server.get('/',()=>{
    return 'Rota GET'
})

server.listen({port:3035},console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C'))
