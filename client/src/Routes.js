
// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import Resources from './pages/Resources';
import Collaborations from './pages/Collaborations';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs.js';
import News from './pages/News';
import Login from './pages/Login.js';
import Register from './pages/Register';
import Footer from './pages/Footer.js';
import GraphicalAnalysis from './pages/GraphicalAnalysis.js';
import ResearchInstitutes from './components/Institutes/ResearchInstitutes';
import Laboratories from './components/Institutes/Laboratories';
import GovernmentAgencies from './components/Institutes/GovernmentAgencies';
import IctPartners from './components/Institutes/IctPartners';
import Others from './components/Institutes/Others.js';
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
import PostCalls from './pages/admin3/PostCalls'
import PostPublications from './pages/admin3/PostPublications'
import PostAcceptedProjects from './pages/admin3/PostAcceptedProjects';
import PostHistory from './pages/admin3/PostHistory';
import PostInstitutes from './pages/admin3/PostInstitutes';
import PostCollaborations from './pages/admin3/PostCollaborations.js'
import PostNews from './pages/admin3/PostNews'
import ViewFile from './pages/admin/ViewFile';
import ViewFeedback from "./pages/admin/ViewFeedback.js"
import ViewNews from './pages/ViewNews.js';
import ProtectAdmin from './ProtectAdmin.js';
import ViewReports from './pages/admin/ViewReports.js';
import ViewCommitteeReports from './pages/admin/ViewCommitteeReports.js';
import AddAdmin from './pages/admin/AddAdmin.js';

import Admin2 from './pages/admin2/Admin2.js';
import ViewReports2 from './pages/admin2/ViewReports2.js';
import ProjectFeedback from './pages/admin2/ProjectFeedback.js';
import SubmitReport from './pages/admin2/SubmitReport.js';

import Admin3 from './pages/admin3/Admin3.js';

//user page 

import UserHeader from './components/UserComponents/UserHeader';
import UserDashboard from './pages/user/UserDashboard';
import ConfirmAppointment from './pages/user/ConfirmAppointment';
import CheckStatus from './pages/user/CheckStatus';

import History from './pages/History.js';
import Achivments from './components/HistoryComponents/Achivments.js';

const ConditionalNavbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  // Check if the path is for Login or Register
  if (path === '/login' || path === '/register') {
    return null; // Render nothing for Login and Register pages
  }

  // Check if the path starts with '/admin/'
  if (path.startsWith('/admin')) {
    if(document.cookie){
      if(document.cookie.split(';')[1].split('=')[1] !== '"user"'){
        return <AdminHeader />;
      }
    }
    else{
      navigate('/');
      return <Navbar/>;
    }
  }

   // Check if the path starts with '/user'
    if (path.startsWith('/user') || 
    path.startsWith('/confirm-appointment') || 
    path.startsWith('//check-status') ) {
      if(document.cookie){
        if(document.cookie.split(';')[1].split('=')[1] === '"user"'){
          return <UserHeader />;
        }
      }
      else{
        return <Navbar/>;
      }
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


        <Route path="/graph" element={<GraphicalAnalysis />} />
        <Route path="/protect" element={<ProtectAdmin/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route  path='/resources/accepted-projects' element={<AcceptedProjects/>}/>
        <Route  path='/resources/history' element={<History/>}/>
        <Route path='/achivment/:id' element={<Achivments/>}/>

        <Route  path='/footer' element={<FooterForm/>}/>
        <Route  path='/resources/publications' element={<Publications/>}/>
        <Route  path='/institutes' element={<Institutes />}/>
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route  path='viewNews' element={<ViewNews/>}></Route>
        <Route path='/resources/publications/description' element={<ProjectDescription/>}/>
        <Route  path='/institutes/research' element={<ResearchInstitutes />}></Route>
        <Route  path='/institutes/labs' element={<Laboratories />}></Route>
        <Route  path='/institutes/ict' element={<IctPartners />}></Route>
        <Route  path='/institutes/government' element={<GovernmentAgencies />}></Route>
        <Route  path='/institutes/other' element={<Others />}></Route>
        
        <Route  path='/admin2' element={<Admin2 />}></Route>
        <Route  path='/admin2/viewReports' element={<ViewReports2/>}></Route>
        <Route  path='/admin2/viewFile' element={<ViewFile/>}></Route>
        <Route  path='/admin2/projectFeedback' element={<ProjectFeedback/>}></Route>
        <Route  path='/admin2/submitReport' element={<SubmitReport/>}></Route>

        <Route  path='/admin3' element={<Admin3 />}></Route>
        <Route path='/admin3/news/add-news' element={<PostNews/>}/>
        <Route path='/admin3/calls/add-call' element={<PostCalls/>}/>
        <Route path='/admin3/publications/add-publication' element={<PostPublications/>}/>
        <Route path='/admin3/accepted-projects/add-accepted-project' element={<PostAcceptedProjects/>}/>
        <Route path='/admin3/history/add-history' element={<PostHistory/>}/>
        <Route path='/admin3/institutes/post-to-institutes' element={<PostInstitutes/>}/>
        <Route path='/admin3/collaboration/post-to-collaboration' element={<PostCollaborations/>}/>
      </Routes>
      
 
    
      <Routes>
       <Route element={<ProtectAdmin/>}>
        <Route path='/admin' element = {<Layout />}>
          <Route  index element= {<Admin/>}/>
          <Route path='appointments/add-appointment' element={<SetAppointmentDate/>}/>
          <Route path='user-status/add-user-status' element={<UpdateUserStatus/>}/>
          <Route path='viewFeedback/view-feedback' element={<ViewFeedback/>}/>
          <Route  path='viewReports' element={<ViewReports/>}></Route>
          <Route  path='viewFile' element={<ViewFile/>}></Route>
          <Route  path='viewCommitteeReports' element={<ViewCommitteeReports/>}></Route>
          <Route  path='addAdmin' element={<AddAdmin/>}></Route>
        </Route>
        </Route>

  {/* user */}
  </Routes>

           

     
      <ConditionalFooter />
      </Router>
      
      
  );
}

export default RoutesComponent;