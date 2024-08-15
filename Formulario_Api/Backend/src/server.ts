import Fastify from "fastify"
import cors from "@fastify/cors"

const app = Fastify({logger: true})

const start = async ()=>{
    try {
        app.listen({port:3035})   
        console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')      
    } catch (error) {
        process.exit(1)
    }
}

start()