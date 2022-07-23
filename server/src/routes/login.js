const router = require('express').Router()
const User = require('../models/user')
const Operation = require('../models/operation')
router.post('/',async (req, res) =>{
    const request = req.body
    const user = await User.findOne({"email" : request.email, "passwod": request.passwod})
    if(user.email === request.email && user.password === request.password){
        
       
        // Horrendous approach, NEVER send this decrypted, this is only for testing and mock purposes
        res.set({
            'user-token' : user._id
        })
        res.send(user)
    }else{
        res.send('Error not valid email or password')
    }
} )
module.exports = router;
