import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, "modi", {
    expiresIn: "30d",
  });
};


export default generateToken;