import fastify,{FastifyInstance} from "fastify";
import { userRoutes } from "./routes/user_routes";

const server : FastifyInstance = fastify()

server.register(userRoutes,{
    prefix: '/users'
})

server.listen({port: 3035}, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})