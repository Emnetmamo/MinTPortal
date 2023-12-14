import express from "express";
import Institutes from "../models/users.js";

const router = express.Router()
 
//GET User Info
router.get('/graphicalAnalysis', async (req, res) => {
  
  try {

    // Find documents by category
    const institutesData = await Institutes.find({ category :'Research Institutes'});

  
    res.json(institutesData); // Do something with the retrieved data
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});



//GET Laboratories
router.get('/laboratories', async (req, res) => {
  
  try {

    // Find documents by category
    const institutesData = await Institutes.find({ category :'Laboratories'});

    
    res.json(institutesData); // Do something with the retrieved data
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


//GET ICT partners
router.get('/partners', async (req, res) => {
  
  try {

    // Find documents by category
    const institutesData = await Institutes.find({ category :'Ict Partners'});

    res.json(institutesData); // Do something with the retrieved data
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


//GET Government Agencies
router.get('/agencies', async (req, res) => {
  
  try {

    // Find documents by category
    const institutesData = await Institutes.find({ category :'Government Agencies'});

    res.json(institutesData); // Do something with the retrieved data
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;