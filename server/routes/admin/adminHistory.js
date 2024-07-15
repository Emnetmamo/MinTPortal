import express from 'express';
import multer from 'multer';
import fs from 'fs';
import Publication from '../../models/publications.js';
import History from '../../models/history.js';
import Verify from '../../middleware/verfyAllRoutes.js'
const historyRouter = express.Router();


historyRouter.post('/add-history', async(req, res) => {
 

      // const title=req.body.title
      // const  p_investigator=req.body.p_investigator;
      // const author=req.body.author
      // const description=req.body.description;
      // const field_of_study=req.body.field_of_study
      // const funding_source=req.body.funding_source;
      // const date=req.body.date;
      // const file=req.body.file;
      // const image=req.body.image

      const { title, p_investigator, author, description, field_of_study, funding_source, date, file, image } = req.body;

      try {
        const newPublication = await History.create({
          title,
          p_investigator,
          author,
          description,
          field_of_study,
          date,
          funding_source,
          imagePath: image,
          filePath: file,
        });
      
    res.json('History created', newPublication);
  } catch (error) {
    console.error('An error occurred while saving to the database:', error);
    res.status(500).json({ error: 'An error occurred while saving to the database' });
  }
    }
  // });
);

export default historyRouter;
