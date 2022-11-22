import { Operation } from "../models/Operation.js";
import {User} from "../models/User.js"
export const operationsDao = {
    getOperations: async (id) => {
        const operations = await Operation.findAll({
            where: {
                userId: id
            }
        });
        return operations;
    },
    getOperationById: async (id) => {
        const operation = await Operation.findOne({
            where: {
                id: id
            }
        });
        return operation;
    },
    createOperation: async (data) => {
        const operation = await Operation.create(data);
        return operation;
    },
    updateOperation: async (data, id, userId) => {
        const operation = await Operation.update(data,{
            where: {
                id: id,
                userId: userId,
            }
        })
        return operation;
    }
}

export const usersDao = {
    
}