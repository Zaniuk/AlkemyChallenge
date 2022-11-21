import { Router } from "express";
import {
  getOperations,
  createOperation,
  getOperationById,
  updateOperation,
  deleteOperation,
} from "../controllers/operations.controller.js";
import verifyToken from "../middlewares/verifyToken.js";
const router = Router();

router.get("/operations", verifyToken, getOperations);

router.get("/operations/:id", verifyToken, getOperationById);

router.post("/operations", verifyToken, createOperation);

router.put("/operations/:id", verifyToken, updateOperation);

router.delete("/operations/", verifyToken, deleteOperation);

export default router;
