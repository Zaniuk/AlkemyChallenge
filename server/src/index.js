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
  // try {
  //   await sequelize.sync({force: true})
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
})
app.use(operationsRoute)
app.use(usersRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})