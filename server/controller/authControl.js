import bcrypt from "bcrypt";
import UserModel from "../models/users.js";
import ProjectModel from "../models/projects.js";
import { v4 as uuidv4 } from "uuid";

const register = async (req, res) => {
  const uniqueID = uuidv4();
  if (req.params.page === "register") {
    const { fName, LName, password, email, phone, country, address } = req.body;
    try {
      const user = await UserModel.findOne({ email: email });
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

      res.json("User registered successfully: " + newUser);
    } catch (error) {
      res.json("Error during registration: " + error);
    }

    const {
      projectTitle,
      cvPath,
      teamMembers,
      projectCategory,
      description,
      proposalPath,
    } = req.body;

    try {
      const projectIdea = await ProjectModel.findOne({
        projectTitle: projectTitle,
      });
      if (projectIdea) {
        return res.json(
          "The project topic is already chosen or done by someone else"
        );
      } else {
        const newProjectIdea = await ProjectModel.create({
          projectTitle,
          cvPath,
          teamMembers,
          projectCategory,
          description,
          proposalPath,
        });

        // Add the reference to the user's posts
        user.posts.push(newProjectIdea._id);
        await user.save();

        res.json("Project idea is submitted successfully: " + newProjectIdea);
      }
    } catch (error) {
      res.json("Error occurred during project idea submission");
    }
  } else if (req.params.page === "login") {
    // login code here
  }
};

export default register;
