import express from 'express'

const appRouter = express.Router()

appRouter.get('/user', (req, res)=>{
    console.log('Rota Get')
    return res.status(200).json({message: 'Rota ativa!'})
})


export default appRouter
