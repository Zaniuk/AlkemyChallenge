import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js";
import { Operation } from './Operation.js';
import stringHash from 'string-hash'

export const User = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        set(value){
            this.setDataValue('password', stringHash(value));
        }
    },
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
})
User.hasMany(Operation, {
    foreignKey: 'userId',
    sourceKey: 'id'
})

Operation.belongsTo(User, {
    foreignKey: 'userId',
    targetId: 'id'
})