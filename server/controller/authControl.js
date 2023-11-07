
import UserModel from '../models/users.js';
import ProjectModel from "../models/projects.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import path from 'path';
import multer from 'multer'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from "uuid";

//const SECRET_KEY=process.env.SECRET_KEY
const SECRET_KEY='miint'
const verifyToken = async (req, res, next) => {

  const token = req.cookies.token;
  //console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded =await jwt.verify(token, SECRET_KEY);
    req.user = await decoded.user;
      console.log(req.user)

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
      res.cookie('token', token, { httpOnly: true }); 
      
      res.json({ message: 'User registered successfully', token });
    } catch (error) {
      res.status(500).json({ error: 'Error during registration: ' + error });
    }
    
  }

else if (req.params.page === "submitProject") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({ storage });

  try {
    verifyToken(req, res, async () => {
      const User = await req.user;
     // console.log(User);
      if (!User) {
        return res.json({ message: 'User not found. Please register or log in.' });
      }
      upload.fields([
        { name: 'cvFile', maxCount: 1 },
        { name: 'proposalFile', maxCount: 2 },
      ])(req, res, async (err) => {
        if (err) {
          console.log('Error occurred during file upload: ' + err);
          return res.json({ message: 'Error occurred during file upload' });
        }

        const projectTitle = req.body.projectTitle;
        const teamMembers = req.body.teamMembers;
        const projectCategory = req.body.projectCategory;
        const description = req.body.description;
        console.log('Project Title:', projectTitle);

        const cvPath = req.files['cvFile'][0].path;
        const proposalPath = req.files['proposalFile'][0].path;
        // console.log(cvPath);
        // console.log(proposalPath);

   const projects=   await   ProjectModel.create({
          projectTitle:projectTitle,
          teamMembers:teamMembers,
          projectCategory:projectCategory,
          description:description,
          cvPath:cvPath,
          proposalPath:proposalPath

        })
        .then((projects)=>{res.json('project is stored in database')+projects})
        .catch(error=>{res.json('error during created projects'+error)})
      });
    });
  } catch (error) { 
    return res.json({ message: 'Error occurred during project idea submission: ' + error });
  }
}



 
  

};

export default register;
