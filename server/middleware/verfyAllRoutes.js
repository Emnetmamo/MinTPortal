import express from 'express';
import jwt from 'jsonwebtoken';
const SECRET_KEY = 'miint';

const Verify=(req, res, next)=> {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json('Missing token');
  }

  jwt.verify(token, SECRET_KEY, (error, decode) => {
    if (error) {
      return res.status(401).json('Unauthorized: Error during token verification');
    }

    if (decode.role === 'admin' ) {
        
      next();
    } else {
      return res.status(403).json('Forbidden: Not an admin');
    }
  });
}
export default Verify;