// import express from 'express'
// import bcrypt from 'bcryptjs'
// import  jwt  from 'jsonwebtoken'
// import dotenv from 'dotenv'
// import UserModel from '../models/users.js'


// const router = express.Router()
// dotenv.config()
// const SECRET_KEY= process.env.SECRET_KEY

// router.post('/login',(req,res)=>{
//     const { email, password } = req.body;

//     UserModel.findOne({ email })
//       .then((user) => {
//         if (!user) {
//           return res.status(404).json({ error: 'User not found' });
//         }   


  
//         bcrypt.compare(password, user.password, (error, response) => {
//           if (response) {
//             const token = jwt.sign(
//               { email: user.email, role: user.role, name: `${user.fName } ${user.LName}` },
//               SECRET_KEY,
//               { expiresIn: '1d' }
//          );
//             res.cookie('token', token, { httpOnly: true }); 
//             return res.json({ message: 'ok', role: user.role, name: `${user.Fname } '' ${user.LName}`});
//           } else {
//             return res.status(401).json({ error: 'Incorrect password' });
//           }
//         });
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//       });
// });


// const verifyToken = async (req, res, next) => {
//   const token = req.cookies.token;


//   //console.log('Token:', token);

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = await jwt.verify(token, SECRET_KEY);

//     console.log('Decoded Token:', decoded);

//     req.decoded = decoded;
   

//     next();
//   } catch (error) {
//     console.error('Token Verification Error:', error);
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// router.get('/protect', verifyToken, (req, res) => {
//   const decoded = req.decoded; 

//   if (decoded) {
//    console.log('User role:', decoded.role);
//     res.json(decoded);
//   } else {
//     console.log('No decoded information available');
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// });


// export default router;
import express from 'express'
import bcrypt from 'bcryptjs'
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
              { email: user.email, role: user.role, name: `${user.fName } ${user.LName}` },
              SECRET_KEY,
              { expiresIn: '1d' }
         );
            res.cookie('token', token, { httpOnly: true }); 
            return res.json({ message: 'ok', token,role:user.role, name: `${user.fName } ${user.LName}` });
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