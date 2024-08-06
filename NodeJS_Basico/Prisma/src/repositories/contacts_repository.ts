import { Prisma } from "@prisma/client";
import { Contact, ContactCreate, ContactRepository } from "../interface/contats_intefaces";
import { prisma } from "../database/prisma_client";

class ContactsRepositoryPrisma implements ContactRepository {
    create(data: ContactCreate): Promise<Contact>{}
    
    async findByEmailOrPhone(email:string, phone: string): Promise<Contact | null>{
        const result = await prisma.contacts.findFirst({
            where:{
                OR:[{email,},{phone}]
            },
        })
        return result || null
    }
}

export {ContactsRepositoryPrisma}