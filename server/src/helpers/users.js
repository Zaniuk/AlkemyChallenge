import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const isValidPassword = async (userpass, password) => {
  return await bcrypt.compareSync(password, userpass);
};
export const signToken = async (id) => {
  return await jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });
};
