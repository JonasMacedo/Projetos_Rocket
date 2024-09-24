import express from "express"
import cors from "cors"

import Route from './routes/routes.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/', Route)

app.listen(3035,()=>{console.log("Servidor MySQL ativo\nPara desativar: Ctrl+C")})

