import { User } from "../models/User.js"
import { v4 as uuidv4 } from 'uuid';
import { Op } from "sequelize";


export const getUser = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({
        email, password
    })
    if(user){
        res.send({token: user.id})
    }else{
        res.send({error: 'check your email or password'})
    }
}

export const creeateUser = async (req, res) => {
    const { username, email, password } = req.body
    const validations =
        await User.findAll({
            where: {
                [Op.or]: [{ email: email }, { username: username }]
            }
        })
    if (validations.length == 0) {
        const newUser = await User.create({
            id: uuidv4(),
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
