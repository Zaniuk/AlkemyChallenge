import { User } from "../models/User.js"
import { Operation } from "../models/Operation.js"
import { v4 as uuidv4 } from 'uuid';

export const getOperations = async (req, res) => {

    const { token } = req.headers
    const operations = await Operation.findAll({
        where: { userId: token }
    })
    if (operations) {
        res.send(operations)
    } else {
        res.send({ error: 'This user has not operations yet' })
    }
}

export const createOperation = async (req, res) => {
    const { concept, amount, type } = req.body
    const { token } = req.headers
    if (concept && amount && type && token) {
        const operation = await Operation.create({
            id: uuidv4(),
            concept: concept,
            amount: amount,
            type: type,
            userId: token
        })
        res.send(operation)
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