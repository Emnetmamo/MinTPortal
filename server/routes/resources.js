import express from "express";
import Publicaiton from '../models/publications.js'
import AcceptedProject from "../models/acceptedProjects.js";

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

export default router;