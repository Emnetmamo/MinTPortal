import fileUpload from 'express-fileupload';
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
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
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//const CONNECTION_URL = process.env.CONNECTION_URL
const CONNECTION_URL = 'mongodb+srv://adaneeshete:adaneeshete@cluster0.9qj7xxi.mongodb.net/?retryWrites=true&w=majority';
// const PORT = process.env.PORT;
const PORT = 4000;
//I changed the port so that we can write it in our paths. If the port number is not specified, we won't be able to
//write the path like http://127.0.0.1:4000 since we would not know the port number for sure.
mongoose.connect(CONNECTION_URL)
.then(()=>{console.log('mongdb is connected')})
.catch(error=>{console.log('error occure  during connection'+error)})
   
//user routes
  app.use('/auth/:page',register)
  app.use('/admin/:page',addNews)
  app.use('/publication',publication)
  app.use('/announcements/:page', announcementPost);




 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


