import { User, UserCreate, UserRepository } from "../interface/users_interface";
import { UserRepositoryPrisma } from "../repositories/user_repository";

class UserUseCase{
    private userRepository : UserRepository
    constructor(){
        this.userRepository = new UserRepositoryPrisma()
    }

    async create({name, email}: UserCreate): Promise<User>{
        
        const verifyUserEmail = await this.userRepository.findByEmail(email)
        if(verifyUserEmail){ // Verifica a existencia do usuario no banco.
            throw new Error("User already exists");            
        }

        const result = await this.userRepository.create({email, name}) // inserindo no banco de dados.
        return result   
    }

}

export {UserUseCase}