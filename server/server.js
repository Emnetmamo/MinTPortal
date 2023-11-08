import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

import path from 'path';
dotenv.config();

import register from './controller/authControl.js'
import announcementPost from './controller/announcementPost.js';

//routes imports 
import news from './routes/news.js'
import Collaboration from './routes/collaboration.js';
import resources from './routes/resources.js'
import adminNews from './routes/admin/adminNews.js'
import adminCollaboration from './routes/admin/adminCollaboration.js'
import adminPublications from './routes/admin/adminPublications.js'
import adminAcceptedProjects from './routes/admin/adminAcceptedProjects.js'
import login from './controller/login.js';
import dashboardRoute from './middleware/dashboard.js';

const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL
 const PORT = process.env.PORT_2;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.static(path.join('./', 'public')));


// db connection
async function main() {
  try {
    await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}
main()

   
//user routes
app.use('/auth/:page',register)
app.use('/announcements/:page', announcementPost);
app.use('/authl',login)
app.use('/admind',dashboardRoute)
//app.use('/announcements', fetchRoute)
app.use('/news', news);
app.use('/resources', resources);

//middleware to  admin  routes
app.use('/admin/news', adminNews);
app.use('/admin/publications', adminPublications)
app.use('/admin/accepted-projects', adminAcceptedProjects)

app.use('/collaboration', Collaboration);
app.use('/admin/collaboration', adminCollaboration);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


