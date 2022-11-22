import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const isValidPassword = async (userpass, password) => {
  return await bcrypt.compareSync(String(password), String(userpass));
};
export const signToken = async (user) => {
  return await jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};
export const hashPassword = async (password) => {
    return await bcrypt.hashSync(String(password), 10);
    }
