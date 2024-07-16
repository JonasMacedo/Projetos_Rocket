import mongoose from "mongoose";
import User from "./Models/users.js";

async function connectMongo(){
    const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
    mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao MongoDB @")})
    .catch(()=>{("Falha na conexão com o MongoDB!!")})
    
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

const deleteUser = async(id)=>{

    let connect = await connectMongo()
    
    try {
        let user = await User.findByIdAndDelete(id)
        
        if (!user) {
            return user.message    
        }    
        
        let users = await User.find()
        return users

    } catch (error) {
        return error
    }



}

export{connectMongo}