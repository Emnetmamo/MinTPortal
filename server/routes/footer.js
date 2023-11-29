
import express from "express";
import multer from 'multer'

import Footer from '../models/footer.js'

const router = express.Router()

const upload = multer({
  limits: { fileSize: 1000000 }, // File size limit: 1MB
}).single('image');

// POST footer form
router.post('/add-footer', async(req, res) => {
 
  upload(req, res, async (err) => {
    if (err) {
      // Handle upload error
      res.status(500).json({ error: 'An error occurred while uploading' });
    } else{
       const { fullName, email, message,  } = req.body; 
      
      const serverUrl = 'http://localhost:5001'; // Replace this with your server URL
      
      try {
          const newFooter =  new Footer({
        fullName,
        email,
        message,
        createdAt: new Date(), 
      });
       const savedFooter = await newFooter.save();
        res.json({savedFooter});
        
      } catch (error) {
       
        console.error('An error occurred while saving to the database:', error);         
        res.status(500).json({ error: 'An error occurred while saving to the database' });
      }
    }});
  });


  router.get('/', async (req, res) => {
    try {
      const feedbackData = await Footer.find({}, { createdAt: 1,fullName: 1, email: 1, message: 1, _id: 0 }); // Only include createdAt and message
      res.json(feedbackData);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
      res.status(500).json({ error: 'An error occurred while fetching feedback data' });
    }
  });
  


  

export  default router;