import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const ProtectAdmin = express.Router();
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = await jwt.verify(token, SECRET_KEY);
    req.decoded = decoded;
    next();
  } catch (error) {
    console.error('Token Verification Error:', error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

ProtectAdmin.get('/', verifyToken, (req, res) => {
  const decoded = req.decoded; 
  const isAuthenticated = !!decoded;

  if (isAuthenticated) {
    res.json({ isAuthenticated });
  } else {
    console.log('No decoded information available');
    res.status(401).json({ message: 'Unauthorized' });
  }
});

export default ProtectAdmin;
