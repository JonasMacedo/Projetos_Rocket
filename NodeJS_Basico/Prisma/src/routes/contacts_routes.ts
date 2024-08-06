import { FastifyInstance } from "fastify";
import { ContactUseCase } from "../usecases/contats_usecase";

import { UserCreate } from "../interface/users_interface";
import { authMiddleware } from "../../middlewares/auth_middleware";

export async function ContactRoutes(fastify: FastifyInstance){
    
    const useContact = new ContactUseCase()
    
    fastify.addHook('preHandler', authMiddleware) // adicionando o middleware para verificacao.

    fastify.post<{Body: UserCreate}>('/', async(req,res)=>{
        let {name, email} = req.body
        try {
            const data = await useContact.create({
                
            })
            return res.send(data)
        } catch (error) {
            res.send(error)
        }
    })

    fastify.get('/',(req,res)=>{
        res.send({hello:'world'})
    })
}

