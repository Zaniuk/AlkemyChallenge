import 'dotenv/config'
const PORT = process.env.PORT
import express from 'express'
import operationsRoute from './routes/operations.route.js'
import usersRoute from './routes/users.route.js'
import { sequelize } from './database/database.js'
import './models/User.js'
import  './models/Operation.js'
const app = express()

app.use(express.json())
app.get('/', async(req, res) => {
  res.send('Hello World!')
})
app.use(operationsRoute)
app.use(usersRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})