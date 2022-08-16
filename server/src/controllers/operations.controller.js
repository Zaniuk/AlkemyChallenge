import { User } from "../models/User.js"
import { Operation } from "../models/Operation.js"
import { v4 as uuidv4 } from 'uuid';
import { validate } from "uuid";

export const getOperations = async (req, res) => {

    const { token } = req.headers
    try {
        if (validate(token)) {
            const operations = await Operation.findAll({
                where: { userId: token }
            })

            operations ? res.send(operations) :  res.send({ error: 'This user has not operations yet' })
        }else{
            res.send({
                error: 'Your token is not valid'
            })
        }
    } catch (error) {
        res.send(error)
    }
}

export const createOperation = async (req, res) => {
    const { concept, amount, type, date } = req.body
    const { token } = req.headers
    if (concept && amount && type && token && date)  {
        try {
            const operation = await Operation.create({
                id: uuidv4(),
                concept: concept,
                amount: amount,
                type: type,
                userId: token,
                date: new Date(date)
            })
            !operation ? res.send({ error: 'Can not create operation' }) : res.send(operation)
        } catch (error) {
            res.send(error)
        }
    } else {
        res.send({ error: "Please fill all fields" })
    }
}

export const updateOperation = async (req, res) => {
    const { id, data } = req.body
    const { amount, concept, date } = data
    const { token } = req.headers
    if (data) {
        try {
            const operation = await Operation.update({
                amount,
                concept,
                date
            }, {
                where: { userId: token, id: id }
            })
            operation[0] === 1 ? res.send({ message: 'Operation updated sucessfully' }) : res.send({ error: 'Can not update operation' })
        } catch (error) {
            res.send({ error })
        }
    }

}

export const deleteOperation = async(req, res) => {
    const {id} = req.body
    const {token} = req.headers
    const operation = await Operation.destroy({
        where: {id: id, userId: token}
    })
    operation === 1 ? res.send({message: 'Operation deleted sucessfully'}) : res.send({error: "Can't find that operation"})
}
export const getOperationById = async(req, res) => {
    const {id}= req.params
    const operation = await Operation.findOne({
        
    })
}