
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
  let user = []; // Define user variable outside the if-else block

  if (req.params.page === "register") {
    const { fName, LName, password, email, phone, country, address, sex } = req.body;
    try {
      user = await UserModel.find({ email: email }); // Assign user

      if (user.length > 0) {
        return res.json("UserExist");
      }

      const hash = await bcrypt.hash(password, 12);
      const nowDate = new Date(Date.now()).toISOString();
      // await UserModel.updateMany( {},{ $set: { sex : 'Male'} }, { multi: true });
      // await UserModel.updateMany( {},{ $set: { registeredDate : nowDate} }, { multi: true });
      const newUser = await UserModel.create({
        fName,
        LName,
        password: hash,
        email,
        phone,
        country,
        address,
        uniqueID,
        sex,
        registeredDate: nowDate
      });
     
      const token = jwt.sign({ user: newUser }, SECRET_KEY, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true }); 
      
      res.json('Userregistered' );
    } catch (error) {
      res.status(500).json({ error: 'Error during registration: ' + error });
    }
    
  }

  if (req.params.page === "register2") {
    const { fName, LName, password, email, phone, country, address, sex, adminType } = req.body;
    try {
      user = await UserModel.find({ email: email }); // Assign user

      if (user.length > 0) {
        return res.json("UserExist");
      }

      const hash = await bcrypt.hash(password, 12);
      const nowDate = new Date(Date.now()).toISOString();
      // await UserModel.updateMany( {},{ $set: { sex : 'Male'} }, { multi: true });
      // await UserModel.updateMany( {},{ $set: { registeredDate : nowDate} }, { multi: true });
      const newUser = await UserModel.create({
        fName,
        LName,
        password: hash,
        email,
        phone,
        country,
        address,
        uniqueID,
        sex,
        registeredDate: nowDate,
        role: adminType
      });
     
      const token = jwt.sign({ user: newUser }, SECRET_KEY, { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true }); 
      
      res.json('Userregistered' );
    } catch (error) {
      res.status(500).json({ error: 'Error during registration: ' + error });
    }
    
  }

else if (req.params.page === "submitProject") {
  const __filename = fileURLToPath(import.meta.url);
  // const __dirname = dirname(__filename);
  const __dirname = "public";
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
    console.log(User);
      if (!User) {
        return res.json({ message: 'User not found. Please register or log in.' });
      }
      upload.fields([
        { name: 'cvFile', maxCount: 1 },
        { name: 'proposalFile', maxCount: 2 },
        { name: 'letter', maxCount: 2 }
      ])(req, res, async (err) => {
        if (err) {
          console.log('Error occurred during file upload: ' + err);
          return res.json({ message: 'Error occurred during file upload' });
        }



        
        //console.log(req.body);
        let Title = [];

        const projectTitle = req.body.projectTitle;
        const teamMembers = req.body.teamMembers;
        const projectCategory = req.body.projectCategory;
        const description = req.body.description;
        const email1 = req.body.email;
        const institute = req.body.institute;
        console.log('Project Title:', projectTitle);
        console.log("TeamMember: " + teamMembers);

        const cvPath = req.files['cvFile'][0].path.split('\\')[1] + '\\' + req.files['cvFile'][0].path.split('\\')[2];
        const proposalPath = req.files['proposalFile'][0].path.split('\\')[1] + "\\" +req.files['proposalFile'][0].path.split('\\')[2];
        const letterPath = req.files['letter'][0].path.split('\\')[1] + "\\" +req.files['letter'][0].path.split('\\')[2];

        let team1 = teamMembers.replace('[', '');
        team1 = team1.replace(']', '');
        team1 = team1.replaceAll('"', '');
        
        let teamMembers1 = [];
        for (let i = 0; i < team1.split(',').length; i++) {
          teamMembers1.push(team1.split(',')[i]);
        }
        console.log("TeamMember1: " + teamMembers1);
        const nowDate = new Date(Date.now()).toISOString();
        // console.log(cvPath);
        // console.log(proposalPath);
        // await ProjectModel.updateMany( {},{ $set: { email : 'emnetmk@gmail.com'} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { hostInstitution : "Addis Ababa University"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { proposalPath2 : "uploads\\1701198466688.pdf"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { presentationPath : "uploads\\1701198466688.pdf"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { proposalPath3 : "uploads\\1701198466688.pdf"} }, { multi: true });
        // await ProjectModel.updateMany( {},{ $set: { grantedDate : nowDate} }, { multi: true });
        //console.log(email1);
        // const data={projectTitle:projectTitle,teamMembers:teamMembers,projectCategory:projectCategory,description:description,cvPath:cvPath,proposalPath:proposalPath}
        //await ProjectModel.updateMany( {},{ $set: { currentReviewer : "MinT Research Sector Members"} }, { multi: true });
        Title=await ProjectModel.find({Title:projectTitle});
        if(Title.length>0){
          res.json('titlepresent')

        }else{
          const projects=   await   ProjectModel.create({
            projectTitle:projectTitle,
            teamMembers:teamMembers1,
            projectCategory:projectCategory,
            description:description,
            cvPath:cvPath,
            proposalPath:proposalPath,
            email:email1,
            status:1,
            hostInstitution:institute,
            letterPath: letterPath,
            submittedDate: nowDate,
            grantedDate: nowDate,
            proposalPath2: " ",
            presentationPath: " ",
            proposalPath3: " ",
            currentReviewer: "Technical Committee Members"
          })
          .then((projects)=>{res.json('project is stored in database')+projects})
          .catch(error=>{res.json('error during created projects'+error)})
        }
        
       
      });
    });
  } catch (error) { 
    return res.json({ message: 'Error occurred during project idea submission: ' + error });
  }
}



 
  

};

export default register;
