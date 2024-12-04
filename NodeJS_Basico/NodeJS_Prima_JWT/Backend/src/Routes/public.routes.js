import express from 'express'
import { createUsers, loginUser } from '../Controllers/Users.Controller.js'

const appRouter = express.Router()

appRouter.post('/createuser', createUsers)

appRouter.post('/login', loginUser)

export default appRouter
