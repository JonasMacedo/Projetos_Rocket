import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) =>{ // metodo de middlewares do NextJs.

    const token = req.headers.authorization
    console.log("Token puro: ",token)

    if(!token){
        res.status(401).json({messagem: "Acesso negado"})
    }
    
    const decoded = token.replace('Bearer ','') 
    console.log("token decodificado: ", decoded)
    
    //jwt.verify(token.replace('Bearer ',''), jwt.JWT_SECRET)
    
    // try {

    // } catch (error) {
    //     return res.status(401).json({messagem:"Token Invalido."})
    // }

    next()
} 


export default auth