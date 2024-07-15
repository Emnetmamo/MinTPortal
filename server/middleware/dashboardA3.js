import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const dashboardRoute = express.Router();
const SECRET_KEY = process.env.SECRET_KEY

function Verify(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json('Missing token');
  }

  jwt.verify(token, SECRET_KEY, (error, decode) => {
    if (error) {
      return res.status(401).json('Unauthorized: Error during token verification');
    }

    if (decode.role === 'admin3' ) {
      req.decoded = decode
      next();
    } else {
      return res.status(403).json('Forbidden: Not eligible');
    }
  });
}

dashboardRoute.get('/dashboard', Verify, (req, res) => {
  const decoded = req.decoded
  res.json({message: 'ok', decoded});
});

export default dashboardRoute;