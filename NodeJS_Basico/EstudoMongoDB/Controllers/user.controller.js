import User from "../Models/users.js"
import { connectMongo } from "../Database/db.js"

const allUsers = async (req, res)=>{
    
    let connect = await connectMongo()
    let allUsers = await User.find()
    
    return res.json(allUsers)
}

const findUser = async (req, res)=>{
    try {
        const {id} = req.params
        let connect = await connectMongo()
        let user = await User.findById(id)
        
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}

const addUser = async (req, res)=>{
    // console.log(user)
    
    let {name} = req.body // desestruturacao para pegar o campo NAME.
    let user = req.body
    let connect = await connectMongo()

    try { // verifica se já existe o usuario.
        let pesquisaUser = await User.findOne({name:name})
        console.log('existe: ', pesquisaUser)
        
        if(!pesquisaUser){ //caso nao exista o usuario.
            let newUser = await User.create(user)
            console.log('criado o usuario: ', newUser)
            return res.status(200).json(newUser)
        }
        return pesquisaUser

    } catch (error) {
        return error
    }

}

const upDateUser = async(req, res)=>{
    
    let connect = await connectMongo()
    let {id} = req.body
    
    try {
        
        let user = await User.findByIdAndUpdate(id, req.body) 
        
        if (!user) { // Verifica se o usuario não existe.
            console.log("Usuario não encontrado")    
            return user.message    
        }
        
        let userAtt = await User.findById(id)
        return res.status(200).json(userAtt)
        
    } catch (error) {
        return error
    }
}

const deleteUser = async(req, res)=>{

    let {id} = req.params
    let connect = await connectMongo()

    try {
        let user = await User.findByIdAndDelete(id)
        
        if (!user) {
            return user.message    
        }    
        
        let users = await User.findById(id)
        return res.status(200).json(users)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export{addUser, allUsers, findUser, upDateUser, deleteUser}