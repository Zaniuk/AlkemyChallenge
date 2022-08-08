import { User } from "../models/User.js"
import { v1 as uuidv1 } from 'uuid';
import { Op } from "sequelize";

export const getUser = (req, res) => {
    res.send('Getting Operations')
}

export const creeateUser = async (req, res) => {
    const { username, email, password } = req.body
    const validations =
        await User.findAll({
            where: {
                [Op.or]: [{ email: email }, { username: username }]
            }
        })
    if (validations === []) {
        const newUser = await User.create({
            id: uuidv1(),
            username,
            email,
            password,
        })
        res.send({
            "sucess": "Your user is sucessfully created"
        })
    } else {
        res.send({
            "error": "Email or username is already taken"
        })
    }

}

export const updateUser = async (req, res) => {
    const { data } = req.body
    const { password, newPassword } = data
    const { id } = req.params
    if (password != newPassword) {
        const user = await User.findOne({
            id: id,
            where: {password : password}
        })
        if(user){
            user.set({
                password: newPassword
            })
            const updated = await user.save()
            res.send(updated)
        }else{
            res.send({error: 'incorrect password'})
        }
    }else{
        res.send({error: 'password cannot be the same'})
    }
}
