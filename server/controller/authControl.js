
import UserModel from '../models/users.js';
import ProjectModel from "../models/projects.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from "uuid";

const SECRET_KEY='adaneshtee'
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
const register = async (req, res) => {
  const uniqueID = uuidv4();
  let user; // Define user variable outside the if-else block

  if (req.params.page === "register") {
    const { fName, LName, password, email, phone, country, address } = req.body;
    try {
      user = await UserModel.findOne({ email: email }); // Assign user

      if (user) {
        return res.json("User already exists, please login.");
      }

      const hash = await bcrypt.hash(password, 12);
      const newUser = await UserModel.create({
        fName,
        LName,
        password: hash,
        email,
        phone,
        country,
        address,
        uniqueID,
        posts: [], // Initialize the user's posts as an empty array
      });
     
      const token = jwt.sign({ user: newUser }, SECRET_KEY, { expiresIn: '1h' });
      res.json({ message: 'User registered successfully', token });
    } catch (error) {
      res.status(500).json({ error: 'Error during registration: ' + error });
    }

  
   
    
  } else if (req.params.page === "submitProject") {
    try {
      
      verifyToken(req, res, async () => {
        // Check if the user exists
        if (!req.user) {
          return res.json({ message: 'User not found. Please register or log in.' });
        }
  
      
        const { projectTitle, teamMembers, projectCategory, description } = req.body;
        const projectIdea = await ProjectModel.findOne({ projectTitle });
  
        if (projectIdea) {
          return res.json({ message: 'The project topic is already chosen or done by someone else' });
        } else {
          const newProjectIdea = await ProjectModel.create({
            projectTitle,
            teamMembers,
            projectCategory,
            description,
          });
  
          req.user.posts.push(newProjectIdea._id);
          await req.user.save();
  
          return res.json({ message: 'Project idea is submitted successfully: ' + newProjectIdea });
        }
      });
    } catch (error) {
      return res.json({ message: 'Error occurred during project idea submission' + error });
    }
  }else if (req.params.page === "login") {
    // login code here
  }
};

export default register;
