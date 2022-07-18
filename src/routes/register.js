const mongoose = require('mongoose')

const router = require('express').Router()
const User = require('../models/user')
const DB_URL = process.env.DB_URL


mongoose.connect(DB_URL, ()=> {
    console.log('DB is connected')
})


router.post('/', async( req, res ) =>{
    //important note: NEVER save user credentials as raw strings.
    const request = req.body
    const user = new User({
        username: request.username,
        email: request.email,
        password: request.password
    })
    try{
        await user.save()
        res.send({message: 'User created sucessfully'})
    }
    catch(err){
        if(err.code === 11000){
            res.send({message: `${Object.keys(err.keyValue)} already exists`})
        }else{
            res.send(err)
        }
    }
 })
module.exports = router;
