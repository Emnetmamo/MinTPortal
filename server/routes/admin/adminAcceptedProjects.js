import express from 'express';
import multer from 'multer';
import fs from 'fs';
import AcceptedProject from '../../models/acceptedProjects.js';
import Verify from '../../middleware/verfyAllRoutes.js';
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const newPublicationId = 'accepted-' + Date.now();
    const publicationsPath = `public/accepted-projectsfiles/${newPublicationId}`;

    fs.mkdir(publicationsPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating directory:', err);
      } else {
        console.log('Directory created successfully:', publicationsPath);
        cb(null, publicationsPath);
      }
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, // File size limit: 3MB
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'file', maxCount: 1 },
]);

router.post('/add-accepted-project',(req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while uploading' });
    } else {
      const { title, p_investigator, author, funding_source, description, field_of_study, date } = req.body;
      let filePath = '';
      let imagePath = 'public\\images\\noimage.png';

      if(req.files['file']) {
        filePath = req.files['file'][0].path; // Multer saves the file path
       console.log(filePath)
       }
                   
       if (req.files['image']){ 
       imagePath =  req.files['image'][0].path; // Multer saves the image path
       console.log(imagePath) }


      const serverUrl = 'http://localhost:5001'; // Replace this with your server URL

      // Process image path
      const partsImage = imagePath.split('public\\');
      const cleanImagePath = partsImage.join('');
      const imageUrl = serverUrl + '/' + cleanImagePath;
      const imagePaths = imageUrl.replace(/\//g, '\\');

      // Process file path
      const partsFile = filePath.split('public/');
      const cleanFilePath = partsFile.join('');
      const fileUrl = serverUrl + '/' + cleanFilePath;
      const filePaths = fileUrl.replace(/\//g, '\\');

      try {
        const newPublication = new AcceptedProject({
          title,
          p_investigator,
          author,
          funding_source,
          description,
          field_of_study,
          date,
          imagePath: imagePaths,
          filePath: filePaths,
        });

        const savedPublication = await newPublication.save();
        res.json(savedPublication);
      } catch (error) {
        console.error('An error occurred while saving to the database:', error);
        res.status(500).json({ error: 'An error occurred while saving to the database' });
      }
    }
  });
});

export default router;
