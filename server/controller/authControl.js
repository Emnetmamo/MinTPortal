import bcrypt from 'bcrypt';
import UserModel from '../models/users.js';


const register = async (req, res) => {
  if(req.params.page === "register") {
    const { fName, LName, password, email, phone, country, address } = req.body;
    try {
      const user = await UserModel.find({ email: email });
      if (user.length > 0) {
        res.json('User already exists, please login.');
      } else {
        const hash = await bcrypt.hash(password, 12);
        const newUser = await UserModel.create({
          fName,
          LName,
          password: hash,
          email,
          phone,
          country,
          address,
        });
        res.json('User registered successfully: '+newUser);
      }
    } catch (error) {
      res.json('Error during registration: ' + error);
    }
  }
  else if(req.params.page === "login")
  {
    //login code here
  }
}

// const login=(req,res)=>{
// //login code here
// }
export default register;