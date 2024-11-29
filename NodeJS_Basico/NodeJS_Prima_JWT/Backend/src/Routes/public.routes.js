import express from 'express'
import { createUsers } from '../Controllers/Users.Controller.js'

const appRouter = express.Router()

appRouter.post('/createuser', createUsers)

appRouter.get('/user', (req, res)=>{
    console.log('Rota Get')
    return res.status(200).json({message: 'Rota ativa!'})
})


export default appRouter
