import express from 'express'
import routerUser from './Routes/user.routes.js'

// const router = express.Router()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false})) // Para que o receba formularios por URL

app.use('/api', routerUser)

app.listen(3035, ()=>{console.log('Servidor ativo!!🚀 \nPara desativar Ctrl+C')})       
