import { FastifyInstance } from "fastify";
import { UserUseCase } from "../usecases/user_usecase";
import { UserCreate } from "../interface/users_interface";

export function userRoutes(fastify: FastifyInstance){
    
    const useCase = new UserUseCase()
    
    fastify.post<{Body: UserCreate}>('/',(req,res)=>{
        let {name, email} = req.body
        try {
            const data = useCase.create({
                name,
                email,
            })
            return res.send(data)
        } catch (error) {
            res.send(error)
        }
    })
}

