import express from 'express'
import publicRoutes from './Routes/public.routes.js'
import privateRoute from './Routes/private.routes.js'

const app = express()

app.use(express.json())
app.use('/api', publicRoutes)
app.use('/', privateRoute)

app.listen(3035, ()=> console.log("Servidor Ativo!"))

