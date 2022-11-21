import { User } from "../models/User.js";
import { Operation } from "../models/Operation.js";
import { v4 as uuidv4 } from "uuid";
import { validate } from "uuid";
import jwt from "jsonwebtoken";
import { operationsDao } from "./dao.js";

export const getOperations = async (req, res) => {
  const { id } = req.decoded;
  try {
    if (validate(id)) {
      const operations = await operationsDao.getOperations(id);
      operations
        ? res.status(200).send(operations)
        : res.send({ error: "This user has not operations yet" });
    } else {
      res.send({
        error: "Your token is not valid",
      });
    }
  } catch (error) {
    res.send({error});
  }
};

export const createOperation = async (req, res) => {
  const { concept, amount, type, date } = req.body;
  const { id } = req.decoded;
  if (concept && amount && type && date && validate(id)) {
    try {
      const operation = await operationsDao.createOperation({
        id: uuidv4(),
        concept: concept,
        amount: amount,
        type: type,
        userId: id,
        date: new Date(date),
      });
      res.send(operation);
    } catch (error) {
      res.send({error} );
    }
  } else {
    res.send({ error: "Please fill all fields" });
  }
};

export const updateOperation = async (req, res) => {
  const { data } = req.body;
  const { id } = req.decoded;
  const { amount, concept, date } = data;
  if (data) {
    try {
      const operation = await operationsDao.updateOperation(
        {
          amount: amount,
          concept: concept,
          date: new Date(date),
        },
        id
      );
      operation[0] === 1
        ? res.send({ message: "Operation updated sucessfully" })
        : res.send({ error: "Can not update operation" });
    } catch (error) {
      res.send({ error });
    }
  }
};

export const deleteOperation = async (req, res) => {
  const { id } = req.body;
  let token = req.headers["Authorization"] || req.headers["authorization"];
  // splits the token in [Bearer, token] and takes the second element
  token = token.split(" ")[1];
  const operation = await Operation.destroy({
    where: { id: id, userId: token },
  });
  operation === 1
    ? res.send({ message: "Operation deleted sucessfully" })
    : res.send({ error: "Can't find that operation" });
};
export const getOperationById = async (req, res) => {
  const { id } = req.params;
  try {
    const operation = await operationsDao.getOperationById(id);
    operation
      ? res.send(operation)
      : res.send({ error: "Can't find that operation" });
  } catch (e) {
    res.send({ error: e });
  }
};
