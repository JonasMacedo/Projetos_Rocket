import { ContactRepository, ContactCreate } from "../interface/contats_intefaces";
import { UserRepository } from "../interface/users_interface";
import { ContactsRepositoryPrisma } from "../repositories/contacts_repository";
import { UserRepositoryPrisma } from "../repositories/user_repository";

class ContactUseCase{
    
    private contactRepository : ContactRepository // definindo o tipo do objeto.
    private userRepository : UserRepository
    
    constructor(){
        this.contactRepository = new ContactsRepositoryPrisma()
        this.userRepository = new UserRepositoryPrisma()
    }   

    async create({name, email, phone, userEmail}:ContactCreate){
        
        let user = await this.userRepository.findByEmail(userEmail)

        if(!user){
            throw new Error('User not found')
        }

        let  verifyExistContact = await this.contactRepository.findByEmailOrPhone(email, phone)

        if(verifyExistContact){
            throw new Error('Contact already exists')
        }

        let contact = await this.contactRepository.create({
            name,
            email,
            phone,
            userId: user.id, 
        })
        return contact
    }

    async listAllContacts( userEmail: string){
        
        let user = await this.userRepository.findByEmail(userEmail)
        
        if (!user) {
            throw new Error("User not found");            
        }

        const contacts = await this.contactRepository.findAllContacts(user.id)

        return contacts
    }

}

export {ContactUseCase}