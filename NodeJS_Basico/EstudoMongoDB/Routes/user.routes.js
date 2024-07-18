import express from 'express'
import User from "../Models/users.js"

import { addUser, allUsers, deleteUser, findUser, upDateUser } from "../Controllers/user.controller.js"

const router = express.Router()

router.get('/getallusers', allUsers)
router.get('/getuser/:id', findUser)

router.post('/adduser', addUser)
router.put('/attuser', upDateUser)

router.delete('/deleteuser/:id',deleteUser)

export default(router)