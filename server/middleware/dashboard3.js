import express from 'express';
import jwt from 'jsonwebtoken';

const dashboardRoute3 = express.Router();
const SECRET_KEY = 'miint';

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
      
      next();
    } else {
      return res.status(403).json('Forbidden: Not an admin');
    }
  });
}

dashboardRoute3.get('/dashboard', Verify, (req, res) => {
  res.json('ok');
});

export default dashboardRoute3;