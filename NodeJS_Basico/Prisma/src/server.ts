import {fastify} from "fastify";

const server = fastify()

server.listen({port: 3035}, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})