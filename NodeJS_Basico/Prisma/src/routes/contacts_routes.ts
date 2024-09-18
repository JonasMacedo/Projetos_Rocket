import { FastifyInstance } from "fastify";
import { ContactUseCase } from "../usecases/contats_usecase";
import { Contact, ContactCreate } from "../interface/contats_intefaces";

import { authMiddleware } from "../middlewares/auth_middleware";

export async function ContactRoutes(fastify: FastifyInstance){
    
    const useContact = new ContactUseCase()
    
    fastify.addHook('preHandler', authMiddleware) // adicionando o middleware para verificacao.

    fastify.post<{Body: ContactCreate }>('/', async(req, res)=>{
        let {name, email, phone} = req.body
        let emailUser = req.headers['email']
        try {
            const data = await useContact.create({
                email, 
                name, 
                phone, 
                userEmail: emailUser,
            })
            return res.send(data)
        } catch (error) {
            res.send(error)
        }
    })

    fastify.get('/', async (req,res)=>{
        let emailUser = req.headers['email']
        try {
            let data = await useContact.listAllContacts(emailUser)
            return res.send(data)
        } catch (error) {
            res.send(error)
        }
    })

    fastify.put<{Body: Contact, Params: {id: string}}>('/:id', async(req,res)=>{
        const {id} = req.params
        const {name, email, phone} = req.body
        try {
            const data = await useContact.updateContact({
                id,
                name,
                email,
                phone,
            })        
            return res.send(data)    
        } catch (error) {
            res.send(error)
        }
    })

    fastify.delete('/delet/:id', async(req,res)=>{
        let {id} = req.params         

    })

}

