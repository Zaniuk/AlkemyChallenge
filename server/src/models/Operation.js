import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js";
import { User } from './User.js';
import moment from 'moment'
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
    },
    date: {
        type: DataTypes.DATE,
        get(){
            return moment(this.getDataValue('date')).format();
        }
        // set(){

        // }
    }
    
})
// Operation.hasOne(User, {

// })
