import mongoose from "mongoose";
import User from "./Models/users.js";

const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"

async function connectMongo(){
    mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao MongoDB @")})
    .catch(()=>{("Falha na conexão com o MongoDB!!")})
    
}

const addUser = async (user)=>{
    // console.log(user)
    
    let {name} = user // desestruturacao para pegar o campo NAME.
    let connect = await connectMongo()

    try { // verifica se já existe o usuario.
        let pesquisaUser = await User.findOne({name:name})
        console.log('existe: ', pesquisaUser)
        
        if(!pesquisaUser){ //caso nao exista o usuario.
            let newUser = await User.create(user)
            console.log('criado o usuario: ', newUser)
            return newUser
        }
        return pesquisaUser

    } catch (error) {
        return error
    }

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

export{addUser, allUsers, findUser, upDateUser, deleteUser}