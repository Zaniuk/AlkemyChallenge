require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const operationsRoute = require('./routes/operations')
const PORT = process.env.PORT || 80
app.use(bodyParser.json())

app.get('/', (_req, res) => {
    res.send('Welcome to my API')
})
app.use('/login', loginRoute)
app.use('/register', registerRoute)
app.use('/operations', operationsRoute)
app.listen(3000, ()=>{
    console.log('Connected!')
})