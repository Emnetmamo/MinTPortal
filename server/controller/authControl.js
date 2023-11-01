import bcrypt from 'bcrypt';
import UserModel from '../models/users.js';
import authRoute from '../routes/authRoute.js';

const register = async (req, res) => {
  const { fName, LName, password, email, phone, country, address } = req.body;
  try {
    const user = await UserModel.find({ email: email });
    if (user.length > 0) {
      res.json({ message: 'User already exists, please login.' });
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
      res.json({ message: 'User registered successfully', newUser });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error during registration', error: error.message });
  }
};

const login = (req, res) => {
  // Log in code here
};

export default { register, login };
