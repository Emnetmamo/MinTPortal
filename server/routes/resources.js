import express from "express";
import Publicaiton from '../models/publications.js'
import AcceptedProject from "../models/acceptedProjects.js";
import Announcements from "../models/announcements.js"
import UserModel from "../models/users.js"
import ProjectModel from "../models/projects.js"

const router = express.Router()
 
//GET publications
router.get('/publications', async (req, res) => {
  try {
    const publicationData = await Publicaiton.find(); // Fetch all news from the MongoDB collection
    res.json(publicationData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});

//GET accepted-projects 
router.get('/accepted-projects', async (req, res) => {
  try {
    const acceptedProjectData = await AcceptedProject.find(); // Fetch all news from the MongoDB collection
    res.json(acceptedProjectData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});

//GET Annnouncements 
router.get('/announcements', async (req, res) => {
  try {
    const AnnouncementstData = await Announcements.find(); // Fetch all news from the MongoDB collection
    res.json(AnnouncementstData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


// GET User Gender Info
router.get('/gender-info', async (req, res) => {
  try {
    const usersData = await UserModel.find();

    // Initialize object to store gender counts by registeredDate
    const genderCountsByDate = {};

    usersData.forEach(user => {
      const registeredDate = new Date(user.registeredDate).getFullYear();

      // Increment the count for each gender
      if (!genderCountsByDate[registeredDate]) {
        genderCountsByDate[registeredDate] = {
          males: 0,
          females: 0
        };
      }

      if (user.sex === 'Male') {
        genderCountsByDate[registeredDate].males++;
      } else if (user.sex === 'Female') {
        genderCountsByDate[registeredDate].females++;
      }
    });

    const genderInfo = Object.entries(genderCountsByDate).map(([year, counts]) => ({
      year,
      ...counts
    }));

    res.json(genderInfo);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET Project Idea Info
router.get('/project-idea', async (req, res) => {
  try {
    const projectsData = await ProjectModel.find();

    // Initialize object to store projectIdea counts by submittedDate
    const projectCountsByDate = {};

    projectsData.forEach(user => {
      const submittedDate = new Date(user.submittedDate).getFullYear();

      // Increment the count for each category
      if (!projectCountsByDate[submittedDate]) {
        projectCountsByDate[submittedDate] = {
          agriculture: 0,
          environmemtEnergy: 0,
          health: 0,
          industry: 0,
          other: 0
        };
      }

      if (user.projectCategory === 'Agriculture') {
        projectCountsByDate[submittedDate].agriculture++;
      } else if (user.projectCategory === 'Environment_Energy') {
        projectCountsByDate[submittedDate].environmemtEnergy++;
      } else if(user.projectCategory === 'Health') {
        projectCountsByDate[submittedDate].health++;
      } else if (user.projectCategory === 'Industry') {
        projectCountsByDate[submittedDate].industry++;
      } else if (user.projectCategory === 'Other') {
        projectCountsByDate[submittedDate].other++;
      }

    });

    const projectIdea = Object.entries(projectCountsByDate).map(([year, counts]) => ({
      year,
      ...counts
    }));

    res.json(projectIdea);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;