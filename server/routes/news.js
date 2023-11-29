import express from "express";
import {getNews} from '../controller/news.js'

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const newsData = await News.find({}).sort({createdAt:1}); // Fetch news from the MongoDB collection sorted by createdAt in ascending order
    res.json(newsData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;