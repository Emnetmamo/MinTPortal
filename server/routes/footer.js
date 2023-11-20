
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
      });
       const savedFooter = await newFooter.save();
        res.json({savedFooter});
        
      } catch (error) {
       
        console.error('An error occurred while saving to the database:', error);         
        res.status(500).json({ error: 'An error occurred while saving to the database' });
      }
    }});
  });
export  default router;