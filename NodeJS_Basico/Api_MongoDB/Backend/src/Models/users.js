import mongoose from "mongoose";

const userSchame = new mongoose.Schema({
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

export default mongoose.model('UserModel', userSchame)