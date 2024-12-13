import express from 'express'
import { PrismaClient } from '@prisma/client'

const privateRoute = express.Router()
const prisma = new PrismaClient()

privateRoute.get('/listusers', async (req,res)=>{

    try {
        const user = await prisma.users.findMany()
        // const user = await prisma.users.findMany({omit: {password: true}}) // para omitir o campo password.
        
        res.status(200).json({mesage:"Usuarios listados com sucesso", user})

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "Falha na rota privada de ListUsers!"})
    }

})


export default privateRoute