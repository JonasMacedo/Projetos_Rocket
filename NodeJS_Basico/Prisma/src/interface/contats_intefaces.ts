export interface Contact {
    id: string,
    name: string,
    email: string,
    phone: string, 
    userId: string, 
}

export interface ContactCreate {
    id: string,
    name: string,
    email: string,
    phone: string, 
    userEmail: string,
}

export interface ContactRepository{
    create(data:ContactCreate):  Promise<Contact>
    findByEmailOrPhone(email: string, phone: string): Promise<Contact | null>
}