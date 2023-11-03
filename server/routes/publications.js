import express from "express";
import Publicaiton from '../models/publication.js'

const router = express.Router()
router.get('/publications', async (req, res) => {
  try {
    const publicationData = await Publicaiton.find(); // Fetch all news from the MongoDB collection
    res.json(publicationData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;