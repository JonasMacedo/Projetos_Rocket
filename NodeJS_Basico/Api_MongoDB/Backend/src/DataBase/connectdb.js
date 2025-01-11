import mongoose from "mongoose";

async function connectMongoDB(){
    const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
    mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao MongoDB")})
    .catch(()=>{("Falha na conexão com o MongoDB!!")})
    
}

export default connectMongoDB