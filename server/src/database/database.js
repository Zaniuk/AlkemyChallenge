import { Sequelize } from "sequelize"
// export const sequelize = new Sequelize(process.env.DB_LOCAL_NAME, process.env.DB_LOCAL_USERNAME, process.env.DB_LOCAL_PASSWORD, {
//     host: process.env.DB_LOCAL_HOST,
//     dialect: 'postgres'
// })
export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../abm.db'
})