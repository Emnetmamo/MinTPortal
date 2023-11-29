import express from "express";
import Collaboration from "../models/collaboration.js";

const router = express.Router()
router.get('/collaborations', async (req, res) => {
  try {
    const CollaborationData = await Collaboration.find(); // Fetch all Collaboration from the MongoDB collection
    res.json(CollaborationData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;