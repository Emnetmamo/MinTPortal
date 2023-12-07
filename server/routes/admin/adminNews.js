import express from "express";
import multer from 'multer'
import fs from 'fs'
import jwt from 'jsonwebtoken'
import path from 'path'
import News from '../../models/news.js'
//import Verify from "../../middleware/verfyAllRoutes.js";
const router = express.Router()
const SECRET_KEY='miint'
// directory creation
function Verify(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json('Missing token');
  }

  jwt.verify(token, SECRET_KEY, (error, decode) => {
    if (error) {
      return res.status(401).json('Unauthorized: Error during token verification');
    }

    if (decode.role === 'admin' ) {
      
      next();
    } else {
      return res.status(403).json('Forbidden: Not an admin');
    }
  });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const newNewsId = 'image-' + Date.now();
    const newsImagesPath = `public/news_images/${newNewsId}`;
    const galleryPath = path.join(newsImagesPath, 'gallery');
    const thumbsPath = path.join(galleryPath, 'thumbs');

    // Create directories if they don't exist
    [newsImagesPath, galleryPath, thumbsPath].forEach((dirPath) => {
      fs.mkdirSync(dirPath, { recursive: true });
    });

    cb(null, newsImagesPath); // Set the destination path
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
  },
});


const upload = multer({
  storage: storage,
  limits: { fileSize: 3000000 }, // File size limit: 1MB
}).single('image');


// POST add-news
router.post('/add-news',Verify, (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      // Handle upload error
      res.status(500).json({ error: 'An error occurred while uploading' });
    } else {
      const { title, author, content, category, date,  } = req.body;
      let imagePath = 'public\\images\\noimage.png'
      if (req.file){ imagePath = req.file.path; 
      console.log(imagePath)  }
      const serverUrl = 'http://localhost:5001'; // Replace this with your server URL
      
      //   Remove 'public' from the path
      const parts = imagePath.split('public\\');
      const cleanImagePath = parts.join('');
      const imageUrl = serverUrl + '/' + cleanImagePath;      
      const imagePaths = imageUrl.replace(/\//g, '\\')
      console.log(imagePaths)
        
      // try {
          const newNews =  News.create({
        title:title,
        author:author,
        content:content,
        category:category,
        date:date,
        imagePath: imagePaths
      })
      .then((result)=>{console.log(result); res.json(result)})
      .catch(err=>console.log(err))
      //  const savedNews = await newNews.save();
      //   res.json({savedNews:savedNews,ok:'ok'});
        
        
      // } catch (error) {
       
      //   console.error('An error occurred while saving to the database:', error);         
      //   res.status(500).json({ error: 'An error occurred while saving to the database' });
      // }
    }
  });
});
export  default router;