import mongoose from "mongoose"

const userSchame = new mongoose.Schema({ //Definindo a estrutura do banco
   
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    sex:{
        type: String,
        required: true,
    },
    createadAt:{
        type: Date,
        default: Date.now()
    },

})

export default mongoose.model('User', userSchame)