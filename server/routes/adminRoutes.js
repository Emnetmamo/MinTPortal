import express from 'express'
import News from '../models/news.js'

const router = express.Router()
// POST add-news
router.post('/add-news',async (req, res) => {  
   
      const newsPost = req.body;
      const newNewsPost =  new News(newsPost);
        
      try {
          
       const savedNews = await newNewsPost.save();
       res.status(201).json(savedNews);        
        
      } catch (error) {
               
        res.status(409).json({ error: 'An error occurred while saving to the database' });
      }
    
  });

export  default router;