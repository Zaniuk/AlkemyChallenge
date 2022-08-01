import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js";
import { User } from './User.js';

export const Operation = sequelize.define('operations', {
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        
    },
    concept:{
        type: DataTypes.ENUM('Salary', 'Entertainment', 'Services', 'Market', 'Shopping', 'Others')
    },
    amount:{
        type: DataTypes.INTEGER
    },
    type:{
        type: DataTypes.ENUM('income', 'outcome')
    }
    
})
// Operation.hasOne(User, {

// })
