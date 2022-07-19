const mongoose = require('mongoose')
const Operation = require('../models/operation')

const router = require('express').Router()

const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL, () => {
    console.log('Connected from operations')
})
router.post('/', async( req, res ) =>{
    
    const {concept, amount, type, user} = req.body
    if(!concept || !amount || !type || !user){
        console.log('Error')
    }else{
        const operation = new Operation({
            concept,
            amount,
            type, 
            date: new Date(),
            user
        })
        try{
            operation.save()
            res.send(operation)
        }catch(err){
            res.send(err)
        }
    }

   
 })


 router.get('/' , async(req, res)=>{
    const user = await req.headers['user']
    try {
        
        const opList = await Operation.find({user: user})
        
        res.send(opList)    
    } catch (error) {
        if(error.path === 'user'){
            res.send({error: 'The user does not exists'})
        }else{
            res.send(error)
        }
        
    }

 })


router.put('/', async (req, res) => {
    const {id, data} = req.body
    try {
        if(!data.type){
            const operation = await Operation.updateOne({"_id": id}, data)
            res.send(operation)
        }else{
            res.send({error: "you cant change type of operation"});
        }
        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router;
