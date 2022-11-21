import { DataTypes } from 'sequelize'
import { sequelize } from "../database/database.js";
import { Operation } from './Operation.js';
import bcrypt from 'bcrypt';
import { hashPassword } from '../helpers/users.js';

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
        set(val) {
            hashPassword(val).then((hash) => {
                this.setDataValue('password', hash);
            })
        },
        get() {
            return () => this.getDataValue('password')
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