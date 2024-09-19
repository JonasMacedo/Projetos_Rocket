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

    async updateContact({ id, name, email, phone }: Contact): Promise<Contact> {
        let result = await prisma.contacts.update({
            where:{
                id
            }, 
            data: {
                email,
                name,
                phone,
            },
        })
        return result 
    }

    async deleteContact(id: string): Promise<boolean> {
        let result = await prisma.contacts.delete({
            where:{
                id
            }
        })
        return result ? true: false
    }
}

export {ContactsRepositoryPrisma}