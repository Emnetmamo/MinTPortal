import express from "express";
import multer from 'multer'
import fs from 'fs'
import path from 'path'
import Collaboration from '../../models/collaboration.js'

const router = express.Router()

// directory creation

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const newCollaborationId = 'image-' + Date.now();
    const CollaborationImagesPath = `public/Collaboration_images/${newCollaborationId}`;
    const galleryPath = path.join(CollaborationImagesPath, 'gallery');
    const thumbsPath = path.join(galleryPath, 'thumbs');

    // Create directories if they don't exist
    [CollaborationImagesPath, galleryPath, thumbsPath].forEach((dirPath) => {
      fs.mkdirSync(dirPath, { recursive: true });
    });

    cb(null, CollaborationImagesPath); // Set the destination path
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  },
});


const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // File size limit: 1MB
}).single('image');


// POST add-Collaboration
router.post('/add-Collaboration', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      // Handle upload error
      res.status(500).json({ error: 'An error occurred while uploading' });
    } else {
      const { title, description, } = req.body;
      let imagePath = 'public\\images\\noimage.png'
      if (req.file){ imagePath = req.file.path; 
      console.log(imagePath)  }
         
      const serverUrl = 'http://localhost:5001'; // Replace this with your server URL
      
      //   Remove 'public' from the path
      const parts = imagePath.split('public\\');
      const cleanImagePath = parts.join('');
      const imageUrl = serverUrl + '/' + cleanImagePath;      
      const imagePaths = imageUrl.replace(/\//g, '\\')

        
      try {
          const newCollaboration =  new Collaboration({
        title,
        description,
        imagePath: imagePaths,
      });
       const savedCollaboration = await newCollaboration.save();
        res.json(savedCollaboration);
        
        
      } catch (error) {
       
        console.error('An error occurred while saving to the database:', error);         
        res.status(500).json({ error: 'An error occurred while saving to the database' });
      }
    }
  });
});
export  default router;