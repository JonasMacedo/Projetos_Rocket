import mongoose from "mongoose";
import User from "./Models/users.js";

const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"

async function connectMongo(){
    mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao MongoDB @")})
    .catch(()=>{("Falha na conexão com o MongoDB!!")})
    
}

const addUser = async (user)=>{
    console.log(user)
    
    let connect = await connectMongo()
    let newUser = await User.create(user)

    return newUser
}

const allUsers = async ()=>{
    
    let connect = await connectMongo()
    let allUsers = await User.find()
    
    return allUsers
}

const findUser = async (id)=>{
    
    let connect = await connectMongo()
    let user = await User.findById(id)
    
    return user
}

const upDateUser = async(body)=>{
    
    let connect = await connectMongo()
    let {id} = body
    
    try {
        
        let user = await User.findByIdAndUpdate(id, body) 
        
        if (!user) { // Verifica se o usuario não existe.
            console.log("Usuario não encontrado")    
            return user.message    
        }
        
        let userAtt = await User.findById(id)
        return userAtt
        
    } catch (error) {
        return error
    }
}

export{addUser, allUsers, findUser, upDateUser}