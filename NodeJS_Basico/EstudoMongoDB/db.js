import mongoose from "mongoose";
import User from "./Models/users.js";

async function connectMongo(){
    const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
    mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao MongoDB @")})
    .catch(()=>{("Falha na conexão com o MongoDB!!")})
    
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