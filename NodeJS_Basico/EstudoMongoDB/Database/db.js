import mongoose from "mongoose";

async function connectMongo(){
    const urlMongo = "mongodb+srv://jonasmdcarvalho:Nodejs@estudonodejs.jg2bdpr.mongodb.net/?retryWrites=true&w=majority&appName=EstudoNodeJs"
    await mongoose.connect(urlMongo)
    .then(()=>{console.log("conectou ao MongoDB @")})
    .catch((error)=>{console.log("Falha na conexão com o MongoDB!!", error)})
    
}

export{connectMongo}