import { Router } from "express";
import { getOperations, createOperation, getOperationById, updateOperation, deleteOperation} from "../controllers/operations.controller.js";
const router = Router()

router.get('/operations', getOperations)

router.get('/operations/:id', getOperationById)

router.post('/operations', createOperation)

router.put('/operations/:id', updateOperation)

router.delete('/operations/:id', deleteOperation)

export default router