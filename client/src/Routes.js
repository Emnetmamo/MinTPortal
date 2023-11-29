
// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Resources from './pages/Resources';
import Collaborations from './pages/Collaborations';
import AboutUs from './pages/AboutUs';
import News from './pages/News';
import Login from './pages/Login.js';
import Register from './pages/Register';
import Footer from './pages/Footer.js';
import ResearchInstitutes from './components/Institutes/ResearchInstitutes';
import Laboratories from './components/Institutes/Laboratories';
import GovernmentAgencies from './components/Institutes/GovernmentAgencies';
import IctPartners from './components/Institutes/IctPartners';
import Publications from './pages/Publications';
import Institutes from './pages/Institutes';
import ProjectDescription from './pages/ProjectDescription';
import AcceptedProjects from './pages/AcceptedProjects';
import FooterForm from './components/footerComponents/FooterForm.js';
import StartApplication from './pages/StartApplication.js';


// admin pages
import Layout from './pages/admin/Layout';
import Admin from './pages/admin/Admin';
import AdminHeader from './components/AdminComponents/AdminHeader';
import SetAppointmentDate from './pages/admin/SetAppointmentDate'
import UpdateUserStatus from './pages/admin/UpdateUserStatus'
import PostCalls from './pages/admin/PostCalls'
import PostPublications from './pages/admin/PostPublications'
import PostAcceptedProjects from './pages/admin/PostAcceptedProjects';
import PostInstitutes from './pages/admin/PostInstitutes';
import PostCollaborations from './pages/admin/PostCollaborations.js'
import PostNews from './pages/admin/PostNews'
import ViewFile from './pages/admin/ViewFile';
import ViewFeedback from "./pages/admin/ViewFeedback.js"
import ViewNews from './pages/ViewNews.js';
import ProtectAdmin from './ProtectAdmin.js';

//user page 

import UserHeader from './components/UserComponents/UserHeader';
import UserDashboard from './pages/user/UserDashboard';
import ConfirmAppointment from './pages/user/ConfirmAppointment';
import CheckStatus from './pages/user/CheckStatus';


const ConditionalNavbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  // Check if the path is for Login or Register
  if (path === '/login' || path === '/register') {
    return null; // Render nothing for Login and Register pages
  }

  // Check if the path starts with '/admin/'
  if (path.startsWith('/admin')) {
    return <AdminHeader />;
  }

   // Check if the path starts with '/user'
    if (path.startsWith('/user') || 
    path.startsWith('/confirm-appointment') || 
    path.startsWith('//check-status') ) {
      return <UserHeader />;
    }


  // If the path is neither Login/Register nor under /admin, render Navbar
  return <Navbar />;
};




const ConditionalFooter = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  // if (path === '/login' || path === '/register') {
  //   return null; // Render nothing for Login and Register pages
  // }

  return <Footer />;
}

const RoutesComponent = () => {
  return (
    <Router>
      <ConditionalNavbar />
      
      <Routes>
        
      <Route path='/user' element={<UserDashboard />} />
      <Route path='/confirm-appointment' element={<ConfirmAppointment />} />
      <Route path='/check-status' element={<CheckStatus />} />
      <Route  path='/viewNews' element={<ViewNews/>}></Route>
      <Route  path='/startApplication' element={<StartApplication/>}></Route>
        
        
        <Route path="/protect" element={<ProtectAdmin/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route  path='/resources/accepted-projects' element={<AcceptedProjects/>}/>
        <Route  path='/footer' element={<FooterForm/>}/>
        <Route  path='/resources/publications' element={<Publications/>}/>
        <Route  path='/institutes' element={<Institutes />}/>
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route  path='viewNews' element={<ViewNews/>}></Route>
        <Route path='/resources/publications/description' element={<ProjectDescription/>}/>
        <Route  path='/institutes/research' element={<ResearchInstitutes />}></Route>
        <Route  path='/institutes/labs' element={<Laboratories />}></Route>
        <Route  path='/institutes/ict' element={<IctPartners />}></Route>
        <Route  path='/institutes/government' element={<GovernmentAgencies />}></Route>
      </Routes>
      
 
    
      <Routes>
       <Route element={<ProtectAdmin/>}>
        <Route path='/admin' element = {<Layout />}>
          <Route  index element= {<Admin/>}/>
          <Route path='news/add-news' element={<PostNews/>}/>
          <Route path='appointments/add-appointment' element={<SetAppointmentDate/>}/>
          <Route path='user-status/add-user-status' element={<UpdateUserStatus/>}/>
          <Route path='calls/add-call' element={<PostCalls/>}/>
          <Route path='publications/add-publication' element={<PostPublications/>}/>
          <Route path='accepted-projects/add-accepted-project' element={<PostAcceptedProjects/>}/>
          <Route path='institutes/post-to-institutes' element={<PostInstitutes/>}/>
          <Route path='collaboration/post-to-collaboration' element={<PostCollaborations/>}/>
          <Route path='viewFeedback/view-feedback' element={<ViewFeedback/>}/>
          <Route  path='viewFile' element={<ViewFile/>}></Route>
      

        </Route>
        </Route>

  {/* user */}
  </Routes>

           

     
      <ConditionalFooter />
      </Router>
      
      
  );
}

export default RoutesComponent;