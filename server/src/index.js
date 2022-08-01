import 'dotenv/config'
const PORT = process.env.PORT
import express from 'express'

import { sequelize } from './database/database.js'

const app = express()
app.get('/', async(req, res) => {
  res.send('Hello World!')
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})