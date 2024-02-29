import express from 'express'
import bcrypt from 'bcrypt'
import  jwt  from 'jsonwebtoken'
import UserModel from '../models/users.js'
const login =express.Router()
const SECRET_KEY='miint'
login.post('/login',(req,res)=>{
    const { email, password } = req.body;

    UserModel.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.json({ error: 'User not found' });//status(404).
        }
  
        bcrypt.compare(password, user.password, (error, response) => {
          if (response) {
            const token = jwt.sign(
              { email: user.email, role: user.role },
              SECRET_KEY,
              { expiresIn: '1d' }
         );
            res.cookie('token', token, { httpOnly: true }); 
            return res.json({ message: 'ok', token,role:user.role });
          } else {
            return res.json({ error: 'Incorrect password' });//status(401).
          }
        });
      })
      .catch((error) => {
        console.error(error);
        res.json({ error: 'Internal server error' });//status(500)
      });
})
export default login
