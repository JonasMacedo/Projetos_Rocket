import { PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { connectMongo } from '../Database/db.js'

const prisma = new PrismaClient() 
const JWT_SECRET = process.env.JWT_SECRET // para poder criar o token JWT.

const createUsers = async (req, res) => {
   
   let connect = await connectMongo()
   let user = req.body
   console.log('Rota ativa, Creater:\n',req.body)
   
   try {       
       
    // let findUser = await user.findUnique({where: user.id})
    
    let findUser = await prisma.users.findUnique({where: {email:user.name}})
    console.log("FindUser: ", findUser)

    if (!findUser) {
        
        let cryptPassword = await bcrypt.genSalt(10) // gerando cryptografia sobre a senha.
        let passwordHash = await bcrypt.hash(user.password, cryptPassword)
        user.password = passwordHash

        let newUser = await prisma.users.create({
            data:{
            email: user.email,
            name: user.name,
            age: user.age,
            password: passwordHash,
            },
        })

        return res.status(200).json(newUser)            

    }
   } catch (error) {
        return res.status(500).json(error)
   }
    
}

const loginUser = async (req, res)=>{
    
    console.log("rota Login, parametros: \n", req.body)
    let userInfo = req.body
    
    try {
        
        //O prisma busca o usuario no MongoDB.
        let userLogin = await prisma.users.findUnique({where: {email:userInfo.email}})
        console.log("UserLogin: \n", userLogin)
        
        if (!userLogin) { // verifica se o usuario existe
            return res.status(400).json({message: 'Usuario não encontrado'})
        }
        
        // verifica a senha digitada com a do banco.
        const verifyPassword = await bcrypt.compare(userInfo.password, userLogin.password)
        
        if (!verifyPassword) {
            return res.status(400).json({message: 'Senha invalida!'})
        }

        // gerando o JWT
        const token = jwt.sign({id:userInfo.id}, JWT_SECRET, {expiresIn: '1m'})

        return res.status(200).json(token)

    } catch (error) {
        return res.status(500).json({message:'Erro no servidor, tente novamente'})        
    }


}

export {createUsers, loginUser}
