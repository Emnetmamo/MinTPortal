import express from 'express';
import multer from 'multer';
import fs from 'fs';
import Publication from '../../models/publications.js';
import History from '../../models/history.js';
import Verify from '../../middleware/verfyAllRoutes.js'
const historyRouter = express.Router();

let fileName1 = "";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const newHistoryId = 'history-' + Date.now();
    const historyPath = `public/history_files/${newHistoryId}`;

    fs.mkdir(historyPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating directory:', err);
      } else {
        console.log('Directory created successfully:', historyPath);
        cb(null, historyPath);
      }
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
  const upload = multer({storage: storage, limits:{fileSize: 10000000}}).fields([
    { name: 'image', maxCount: 1 },
    { name: 'file', maxCount: 1 },
  ]); //file size limit is 10MB

historyRouter.post('/add-history', async(req, res) => {
  upload(req, res, async (err) => {
    const { title, p_investigator, author, description, field_of_study, funding_source, date, file, image } = req.body;
      // const title=req.body.title
      // const  p_investigator=req.body.p_investigator;
      // const author=req.body.author
      // const description=req.body.description;
      // const field_of_study=req.body.field_of_study
      // const funding_source=req.body.funding_source;
      // const date=req.body.date;
      // const file=req.body.file;
      // const image=req.body.image
      if (err) {
        res.status(500).json({ error: 'An error occurred while uploading' });
      } else {
        let filePath = '';
        let imagePath = '';
        if(req.files['file']) {
          filePath = req.files['file'][0].path; // Multer saves the file path
         console.log(filePath)
         }
                     
         if (req.files['image']){ 
         imagePath =  req.files['image'][0].path; // Multer saves the image path
         console.log(imagePath) }
  
  
        const serverUrl = process.env.SERVER_URL;
        // Process image path
      const cleanImagePath = imagePath.replace(/\\/g, '/').split('public/').pop();
      const imagePaths = serverUrl + '/' + cleanImagePath;  

      // Process file path
      const cleanFilePath = filePath.replace(/\\/g, '/').split('public/').pop();
      const filePaths = serverUrl + '/' + cleanFilePath;

      try {
        const newPublication = await History.create({
          title,
          p_investigator,
          author,
          description,
          field_of_study,
          date,
          funding_source,
          imagePath: imagePaths,
          filePath: filePaths,
        });
      
    console.log(newPublication)
    res.json("History Posted");
  } catch (error) {
    console.error('An error occurred while saving to the database:', error);
    res.status(500).json({ error: 'An error occurred while saving to the database' });
  }
}
})
    }
  // ;
);

export default historyRouter;
