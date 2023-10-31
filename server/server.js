const fileUpload = require('express-fileupload');
const express=require('express')
const mongoose=require('mongoose');
const bodyParser =require('body-parser');
const cors =require('cors')
const multer = require('multer'); // For handling file uploads
const upload = multer({ dest: 'uploads/' }); // Set the destination folder for file uploads
require('dotenv').config();
const fs = require('fs');
const path = require('path');
//user defined routes
const News =require('./models/news.js')
const UserModel=require('./models/users.js')
const authRoute=require('./routes/authRoute.js')
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
  app.use('/auth',require('./routes/authRoute.js'))
  app.use('/adminr',require('./routes/adminRoute.js'))




 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


