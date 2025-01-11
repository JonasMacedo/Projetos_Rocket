import express from 'express'
import { createUsers, listusers, loginUser } from '../Controllers/Users.Controller.js'

const appRouter = express.Router()

appRouter.post('/createuser', createUsers)

appRouter.post('/login', loginUser)

appRouter.get('/listusers', listusers)

export default appRouter
