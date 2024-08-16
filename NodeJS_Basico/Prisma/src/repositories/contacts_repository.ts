import { Prisma } from "@prisma/client";
import { Contact, ContactCreateData, ContactRepository } from "../interface/contats_intefaces";
import { prisma } from "../database/prisma_client";

class ContactsRepositoryPrisma implements ContactRepository {
    
    async create(data: ContactCreateData): Promise<Contact>{
        const result = await prisma.contacts.create({
            data:{ 
                name: data.name,
                email: data.email,
                phone: data.phone,
                userId: data.userId, 
            }
        })
        return result
    }
    
    async findByEmailOrPhone(email:string, phone: string): Promise<Contact | null>{
        const result = await prisma.contacts.findFirst({
            where:{
                OR:[{email},{phone}]
            },
        })
        return result || null
    }

    async findAllContacts(userId: string): Promise<Contact[]> {
        let result = await prisma.contacts.findMany({
            where:{
                userId,
            },
        })
        return result
    }
}

export {ContactsRepositoryPrisma}