import fileUpload from 'express-fileupload';
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer'; 
import dotenv from 'dotenv';
import fs from  'fs';
import path from 'path';
dotenv.config();
//import user defined middlware
import auth from './controller/authControl.js'
import admin from  './routes/adminRoute.js'
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
 const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT;
mongoose.connect(CONNECTION_URL)
.then(()=>{console.log('mongdb is conncted')})
.catch(error=>{console.log('error occure  during connection'+error)})
   
//user routes
  app.use('/auth/:page',auth)
  app.use('/adminr',admin)




 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


