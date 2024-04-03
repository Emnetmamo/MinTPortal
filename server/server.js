
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
import adminAppointments from './routes/admin/adminAppointments.js'
import adminPublications from './routes/admin/adminPublications.js'
import adminAcceptedProjects from './routes/admin/adminAcceptedProjects.js'
import adminHistory from './routes/admin/adminHistory.js'
import adminInstitutes from './routes/admin/adminInstitutes.js'
import login from './controller/login.js';
import dashboardRoute from './middleware/dashboard.js';
import dashboardRoute2 from './middleware/dashboard2.js';
import dashboardRoute3 from './middleware/dashboard3.js';
import adminRoutes from './routes/adminRoutes.js'
import adminNews from './routes/admin/adminNews.js'
import adminCollaboration from './routes/admin/adminCollaboration.js'
import institutes from './routes/institutes.js'
import footerForm from './routes/footer.js'
import ProtectAdmin from './controller/protectAdmin.js';
import report from './routes/report.js';
import admin2Feedback from './routes/admin2Feedback.js';
import projectFilesUpload from './routes/projectFilesUpload.js'
import admin2Reports from './routes/admin2Reports.js'

import adminAppointment from './routes/admin/adminAppointment.js';
import adminUserStatus from './routes/admin/adminUserStatus.js';
import getName from './middleware/getName.js';
import histroyRoute from './routes/historyForHome.js';
const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL
 const PORT = process.env.PORT_2;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'POST',"PUT"],
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
//mongoose.set('useFindAndModify', false)
   

app.use('/public/history_files', express.static('public/history_files'));

//user routes
app.use('/history',histroyRoute)
app.use('/auth/:page',register)
app.use('/announcements/:page', announcementPost);
app.use('/authl',login,ProtectAdmin)
app.use('/admind',dashboardRoute)
app.use('/admind2',dashboardRoute2)
app.use('/admind3',dashboardRoute3)
//app.use('/announcements', fetchRoute)
app.use('/news', news);
//app.use('/auth',ProtectAdmin)
app.use('/resources', resources);
app.use('/institutes', institutes);
app.use('/report', report);


//middleware to  admin  routes
app.use('/admin/appointments', adminAppointments);
app.use('/admin/news', adminNews);
app.use('/admin/publications', adminPublications)
app.use('/admin/accepted-projects', adminAcceptedProjects)
app.use('/admin/history', adminHistory)
app.use('/admin/institutes', adminInstitutes)
app.use('/footer', footerForm)


app.use('/collaboration', Collaboration);
app.use('/admin/collaboration', adminCollaboration);

app.use('/admin/userStatus/:id', adminUserStatus);
app.use('/admin/appointment/:id', adminAppointment);

app.use('/admin2Feedback', admin2Feedback);
app.use('/projectFiles', projectFilesUpload);
app.use('/admin2Reports', admin2Reports);
app.use('/getName', getName);

//part of login and logout code
app.use('/check-auth-status', ProtectAdmin);
//logout code
app.get('/logout', (req, res) => {
  res.clearCookie('email');
  res.clearCookie('role');
  res.clearCookie('token').send('Logged out successfully.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


