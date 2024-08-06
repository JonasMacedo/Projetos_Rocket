// Definindo middle para verificação de email.

export function authMiddleware(req, res){
    const apiEmail = req.headers['email']

    if(!apiEmail){
        res.status(401).send({message: 'Email is required'})
    }
}
