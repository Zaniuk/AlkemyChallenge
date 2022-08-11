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

            if (operations) {
                // console.log(operations)
                res.send(operations)
            } else {
                res.send({ error: 'This user has not operations yet' })
            }
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
    const { concept, amount, type } = req.body
    const { token } = req.headers
    if (concept && amount && type && token) {
        try {
            const operation = await Operation.create({
                id: uuidv4(),
                concept: concept,
                amount: amount,
                type: type,
                userId: token,
                date: new Date()
            })
            if (!operation) {
                res.send({ error: 'Can not create operation' })
            } else {
                res.send(operation)
            }
        } catch (error) {
            res.send(error)
        }
    } else {
        res.send({ error: "Please fill all fields" })
    }
}

export const updateOperation = async (req, res) => {
    const { id, data } = req.body
    const { amount, concept } = data
    const { token } = req.headers
    if (data) {
        try {
            const operation = await Operation.update({
                amount,
                concept
            }, {
                where: { userId: token, id: id }
            })
            if (operation[0] === 1) {
                res.send({
                    message: 'Operation updated sucessfully'
                })
            } else {
                res.send({
                    error: 'Can not update operation'
                })
            }
        } catch (error) {
            res.send({ error })
        }
    }

}

export const deleteOperation = (req, res) => {
    res.send('deleting operation')
}
export const getOperationById = (req, res) => {
    res.send('Getting Operation')
}