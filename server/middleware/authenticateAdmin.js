import jwt from "jsonwebtoken";
import express from 'express'
import dotenv from 'dotenv'

const adminAuthenticate=express.Router()
dotenv.config()

const SECRET_KEY= process.env.SECRET_KEY
function Verify(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json('Missing token');
    } else {
      jwt.verify(token, 'adane', (error, decode) => {
        if (error) {
          return res.status(401).json('Unauthorized: Error during token verification');
        } else {
          if (decode.role === 'admin') {
            next();
          } else {
            return res.status(403).json('Forbidden: Not an admin');
          }
        }
      });
    }
  }
  
  adminAuthenticate.get('/dashboard', Verify, (req, res) => {
    res.json('OK');})
    export default adminAuthenticate;