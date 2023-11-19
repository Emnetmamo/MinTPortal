import express from "express";
import Institutes from "../models/institutes.js";

const router = express.Router()
 
//GET institutes
router.get('/post-to-institutes', async (req, res) => {
  try {
    const institutesData = await Institutes.find(); // Fetch all news from the MongoDB collection
    res.json(institutesData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;