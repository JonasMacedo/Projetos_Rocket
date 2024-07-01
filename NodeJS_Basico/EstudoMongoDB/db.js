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

export{addUser, allUsers}