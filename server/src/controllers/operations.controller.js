import { User } from "../models/User.js"
import { Operation } from "../models/Operation.js"
import { v1 as uuidv1 } from 'uuid';

export const getOperations = async(req, res) => {
    
    const {token} = req.headers
    const operations = await Operation.findAll({
        where: {userId: token}
    })
    if(operations){
        res.send(operations)
    }else{
        res.send({error: 'This user has not operations yet'})
    }

    
    
}

export const createOperation = async(req, res) => {
    const {concept, amount, type} = req.body
    const {token} = req.headers
    if(concept && amount && type && token){
        const operation = await Operation.create({
            id: uuidv1(),
            concept: concept,
            amount: amount,
            type: type, 
            userId: token
        })
        res.send(operation)
    }else{
        res.send({error: "Please fill all fields"})
    }
}

export const updateOperation = async(req, res) => {
    const {id, data} = req.body
    const {amount, concept} = data
    if(data){
        const operation = await Operation.findOne({
            id: id
        })
        const newOperation = await operation.set({
            amount, 
            concept
        }).save()
        res.send(newOperation)

    }

}

export const deleteOperation = (req, res) => {
    res.send('deleting operation')
}
export const getOperationById = (req, res) => {
    res.send('Getting Operation')
}