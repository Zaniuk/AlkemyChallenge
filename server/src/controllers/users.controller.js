import { User } from "../models/User.js";
import { v4 as uuidv4 } from "uuid";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { isValidPassword, signToken } from "../helpers/users.js";
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      await User.findOne({
        where: {
          email: email,
        },
      }).then(async (user) => {
        if (user) {
          let _user = user.toJSON();
          const passwordValidation = isValidPassword(_user.password, password);
          if (passwordValidation) {
            let token =  await signToken(_user.id);
            token = `Bearer ${token}`;
            res.status(200).json({
              message: "Login successful",
              token: token,
              user: _user,
            }).end();
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const creeateUser = async (req, res) => {
  const { email, password, username } = req.body;
  if (email && password && username) {
    try {
      // const hashPassword = bcrypt.hashSync(password, 10);
      await User.create({
        id: uuidv4(),
        email: email,
        password: password,
        username: username,
      }).then((user) => {
        const token = signToken(user.id);
        res.send({ token, user });
      });
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send({ error: "Please fill all fields" });
  }
};
export const auth = async (req, res, next) => {
  let token = req.headers["Authorization"] || req.headers["authorization"];

  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.send({ error: "Invalid token" });
      } else {
        res.send({
          user: decoded,
        });
        next();
      }
    });
  } else {
    res.send({ error: "No token provided" });
  }
};
