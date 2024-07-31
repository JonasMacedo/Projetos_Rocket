import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user_usecase";
import { UserCreate } from "../interface/users_interface";

export async function userRoutes(fastify: FastifyInstance){
    
    const useCase = new UserUseCase()
    
    fastify.post<{Body: UserCreate}>('/', async(req,res)=>{
        let {name, email} = req.body
        try {
            const data = await useCase.create({
                name,
                email,
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

