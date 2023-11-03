<<<<<<< Updated upstream
import fileUpload from 'express-fileupload';
=======
>>>>>>> Stashed changes
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
<<<<<<< Updated upstream
import multer from 'multer'; 
import dotenv from 'dotenv';
import fs from  'fs';
import path from 'path';
dotenv.config();
//import user defined middlware
import register from './controller/authControl.js'
import addNews from  './controller/adminControl.js'
import publication from './controller/publication.js'
import announcementPost from './controller/announcementPost.js';
=======
import path from 'path'
//routes imports 
import news from './routes/news.js'
import publications from './routes/publications.js'
import adminNews from './routes/adminNews.js'
import adminPublications from './routes/adminPublications.js'

>>>>>>> Stashed changes
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
<<<<<<< Updated upstream
  origin:"http://localhost:3000",
  credentials:true
}));
const CONNECTION_URL = process.env.CONNECTION_URL
//const CONNECTION_URL = 'mongodb+srv://adaneeshete:adaneeshete@cluster0.9qj7xxi.mongodb.net/Mint?retryWrites=true&w=majority';
 const PORT = process.env.PORT;

=======
  origin: "http://localhost:3000",
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.static(path.join('./', 'public')));

// db connection
async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mintport', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
>>>>>>> Stashed changes

mongoose.connect(CONNECTION_URL)
.then(()=>{console.log('mongdb is connected')})
.catch(error=>{console.log('error occure  during connection'+error)})
   
//user routes
  app.use('/auth/:page',register)
  app.use('/admin/:page',addNews)
  app.use('/publication',publication)
  app.use('/announcements/:page', announcementPost);


<<<<<<< Updated upstream


 
=======
//middleware to routes
app.use('/news', news);
app.use('/resources', publications);
app.use('/admin/news', adminNews);
app.use('/admin/publications', adminPublications)

>>>>>>> Stashed changes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


