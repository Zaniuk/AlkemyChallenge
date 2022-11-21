import { Router } from "express";
import { creeateUser, login , auth} from "../controllers/users.controller.js";
const router = Router()

router.post('/users/login', login)

router.post('/users/register', creeateUser)

router.get('/auth/me' , auth)




export default router