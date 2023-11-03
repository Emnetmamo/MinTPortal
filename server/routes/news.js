import express from "express";
import News from '../models/news.js'

const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const newsData = await News.find(); // Fetch all news from the MongoDB collection
    res.json(newsData);
  } catch (error) {
    console.error('error2:', error)
    res.status(500).json({ error: 'Server error' });
  }
});


export default router;