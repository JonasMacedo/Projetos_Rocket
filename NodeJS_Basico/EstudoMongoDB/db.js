import mongoose from "mongoose";

const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"

async function connectMongo(){
    mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao banco")})
    .catch(()=>{("Falha na conexão com o MongoDB!!")})
    
}

connectMongo()

export{connectMongo}