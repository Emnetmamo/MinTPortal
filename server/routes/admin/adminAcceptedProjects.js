import express from 'express';
import multer from 'multer';
import fs from 'fs';
import AcceptedProject from '../../models/acceptedProjects.js';

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) =>  {
    const Id = Date.now()
    cb(null, `public/acceptedProjectsfile/${Id}/`);
  } ,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // File size limit: 1MB
}).fields([
  { name: 'image', maxCount: 1 },
  { name: 'file', maxCount: 1 },
]);

router.post('/add-accepted-project', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.status(500).json({ error: 'An error occurred while uploading' });
    } else {
      const { title, p_investigator, author, funding_source, description, field_of_study, date } = req.body;
      
      let filePath = ''
      if(req.files['file'][0]) {
         filePath = req.files['file'][0].path; // Multer saves the file path
      }
      

      let imagePath = 'public\\images\\noimage.png'
      if ( req.files['image'][0]){ imagePath =  req.files['image'][0].path; // Multer saves the image path
      console.log(imagePath)  }

      const serverUrl = 'http://localhost:5001'; // Replace this with your server URL

      // Process image path
      const partsImage = imagePath.split('public/');
      const cleanImagePath = partsImage.join('');
      const imageUrl = serverUrl + '/' + cleanImagePath;
      const imagePaths = imageUrl.replace(/\//g, '\\');

      // Process file path
      const partsFile = filePath.split('public/');
      const cleanFilePath = partsFile.join('');
      const fileUrl = serverUrl + '/' + cleanFilePath;
      const filePaths = fileUrl.replace(/\//g, '\\');

      try {
        const newAcceptedProject = new AcceptedProject({
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

        const savedAcceptedProject = await newAcceptedProject.save();   
        res.json(savedAcceptedProject);     
        // Once the project is saved, create a directory with the project ID
        // const newPublicationId = savedAcceptedProject._id;
        // const acceptedProjectsPath = `public/acceptedProjectsfile/${newPublicationId}`;                        
        

        // fs.mkdir(acceptedProjectsPath, { recursive: true }, (err) => {
        //   if (err) {
        //     console.error('Error creating directory:', err);
        //     res.status(500).json({ error: 'Error creating directory' });
        //   } else {
        //     console.log('Directory created successfully:', acceptedProjectsPath);
        //     res.json(savedAcceptedProject);
        //   }
        // });
      } catch (error) {
        console.error('An error occurred while saving to the database:', error);
        res.status(500).json({ error: 'An error occurred while saving to the database' });
      }
    }
  });
});

export default router;

