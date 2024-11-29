import { PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient() 

const createUsers = async (req, res) => {
    
    let user = req.body
    console.log('Rota ativa, parametros:\n',req.body)

    try {
        
        let findUser = await user.findUnique({where: user.id})
        
        if (!findUser) {
            
            let cryptPassword = await bcrypt.genSalt(10) // gerando cryptografia sobre a senha.
            let passwordHash = await bcrypt.hash(user.password, cryptPassword)
            user.password = passwordHash

            let newUser = await prisma.users.create(user)
            return res.status(200).json(newUser)            
        }


    } catch (error) {
        return res.status(500).json(error)
    }
    
}

const loginUser = async (req, res)=>{
    
    try {

        let userInfo = req.body
        let findUser = await prisma.users.findUnique({where: userInfo.id})
        
    } catch (error) {
        return res.status(500).json(error)        
    }


}

export {createUsers, loginUser}
