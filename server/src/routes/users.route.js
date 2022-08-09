import { Router } from "express";
import { creeateUser, getUser, updateUser } from "../controllers/users.controller.js";
const router = Router()

router.post('/users/login', getUser)


router.post('/users/register', creeateUser)

router.put('/users/:id', updateUser)



export default router