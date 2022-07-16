require('dotenv').config()
const express = require('express');
const app = express();
const homeRoute = require('./routes/home')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')

// respond with "hello world" when a GET request is made to the homepage
app.use('/', homeRoute)
app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.listen(3000, ()=>{
    console.log('Connected!')
})