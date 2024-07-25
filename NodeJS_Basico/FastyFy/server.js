
/* Sem o FastiFy
import {createServer} from 'node:http'
const server = createServer()
server.listen(3030, console.log(console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')))
*/

import { fastify } from "fastify"; 
// import { databaseMoemory } from "./database_memory.js";
import { databasePostgres } from './database_postgres.js'

const server = fastify()

// const database = new databaseMoemory()
 const database = new databasePostgres()

server.post('/videos', async (req, res)=>{

    let {title, description, duration} = req.body

    await database.create({
        title,
        description,
        duration,
    })
    console.log("Put: ", database.list())

    return res.status(201).send()
})

server.put('/video/:id',(req, res)=>{
    
    let {id} = req.params
    let {title, description, duration} = req.body

    database.update(id, {
        title,
        description,
        duration,
    })

    return res.status(204).send()
})

server.get('/allvideos', async (req)=>{
    let {search} = req.query
    let videos = await database.list(search)
    console.log('Get: ',videos)
    return videos
})

server.delete('/video/:id', (req, res)=>{
    let {id} = req.params
    database.delete(id)

    return res.status(204).send()
})

server.listen({port:3035},console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C'))
