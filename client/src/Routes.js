
// src/Routes.js
import React, {useState, useEffect}  from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
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
import NationalResearchInstitutes from './components/Institutes/NationalResearchInstitutes.js';
import InternationalResearchInstitutes from './components/Institutes/InternationalResearchInstitutes.js';
import Laboratories from './components/Institutes/Laboratories';
import GovernmentAgencies from './components/Institutes/GovernmentAgencies';
import IctPartners from './components/Institutes/IctPartners';
import Others from './components/Institutes/Others.js';
import Publications from './pages/Publications';
import Institutes from './pages/Institutes';
import ProjectDescription from './pages/ProjectDescription';
import AcceptedProjects from './pages/AcceptedProjects';
import History from './pages/History.js';
import Achivments from './components/HistoryComponents/Achivments.js';
import FooterForm from './components/footerComponents/FooterForm.js';
import StartApplication from './pages/StartApplication.js';

import ViewNews from './pages/ViewNews.js';
import ProtectAdmin from './ProtectAdmin.js';
//user page 
import UserHeader from './components/Layout/Navbar/UserHeader';
import UserDashboard from './pages/user/UserDashboard';
import ConfirmAppointment from './pages/user/ConfirmAppointment';
import CheckStatus from './pages/user/CheckStatus';
import UploadReport from './pages/user/UploadReport';
import FeedbackReport from './pages/user/FeedbackReport';
import SetProjectStatus from './pages/user/SetProjectStatus';

/////

import DashboardIcon from "@mui/icons-material/Dashboard";
import { Add,Chat as ChatIcon, Description, Update, Event, Info, Announcement, CheckCircle, AccountBalance, Group } from '@mui/icons-material';
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from  "@mui/icons-material/ShoppingCart"



// admin pages
import Admin from './pages/admin/Admin.js';
import AdminHeader from './components/AdminComponents/AdminHeader.js';
import SetAppointmentDate from './pages/admin/SetAppointmentDate.js'
import AddAdmin from './pages/admin/AddAdmin.js'
import UpdateUserStatus from './pages/admin/UpdateUserStatus2.js'
import PostCalls from './pages/admin3/PostCalls.js'
import PostPublications from './pages/admin3/PostPublications.js'
import PostAcceptedProjects from './pages/admin3/PostAcceptedProjects.js';
import PostInstitutes from './pages/admin3/PostInstitutes.js';
import PostCollaborations from './pages/admin3/PostCollaborations.js'
import PostHistory from './pages/admin3/PostHistory';
import PostNews from './pages/admin3/PostNews.js'

import ViewFile from './pages/admin/ViewFile.js';
import ViewFeedback from "./pages/admin/ViewFeedback.js"
import ViewReports from './pages/admin/ViewReports.js';

// import Header1 from './components/Layout/Navbar/Navbar1.js'
// import Header2 from './components/Layout/Navbar/Navbar2.js'
// import Header3 from './components/Layout/Navbar/Navbar3.js'

import Sider from  './components/Layout/Sidebar.js'
import {ThemedLayout} from './components/Layout/ThemdLayout.js'
import Admin2 from './pages/admin2/Admin2.js';
import ViewReports2 from './pages/admin2/ViewReports2.js';
import ProjectFeedback from './pages/admin2/ProjectFeedback.js';
import SubmitReport from './pages/admin2/SubmitReport.js';


import Admin3 from './pages/admin3/Admin3.js';
import ForgetPassowed from './components/ForgetPassword.js';
import RestPassowrd from './components/ResetPassword.js';
///////////////

//user components

///

   
const adminSidebarItems =  [
  {
    label: 'Set Appointment Date',
    path: '/admin/appointments/add-appointment',
    icon: <Event/>,
  },
  {
    label: 'Update User Status',
    path: '/admin/user-status/add-user-status',
    icon: <Update />,
  },
  {
    label: 'View Feedback',
    path: '/admin/viewFeedback/view-feedback',
    icon: <ChatIcon />,
  },
  {
    label: 'View Reports',
    path: '/admin/viewReports',
    icon: <Description />,
  },
  {
    label: 'Add Admin',
    path: '/admin/addAdmin',
    icon: <Add />,
  },
  
]

const admin2SidebarItems = [
  {
    label: 'Give Project Feedback',
    path: '/admin2/projectFeedback',
    icon: <ChatIcon />,
  },
  {
    label: 'View Reports',
    path: '/admin2/viewReports',
    icon: <Description />,
  },
  {
    label: 'Submmit Report',
    path: '/admin2/submitReport',
    icon: <Description />,
  },
  // Add more items as needed
]
const admin3SidebarItems = [   {
  label: 'Post News',
  path: '/admin3/news/add-news',
  icon: <Info />,
},
{
  label: 'Post Calls',
  path: '/admin3/calls/add-call',
  icon: <Announcement />,
},
{
  label: 'Post Publications',
  path: '/admin3/publications/add-publication',
  icon: <Description />,
},
{
  label: 'Post Accepted Projects',
  path: '/admin3/accepted-projects/add-accepted-project',
  icon: <CheckCircle/>,
},
{
  label: 'Post To Institutes',
  path: '/admin3/institutes/post-to-institutes',
  icon: <AccountBalance/>,
},
{
  label: 'Post To Collaborations',
  path: '/admin3/collaboration/post-to-collaboration',
  icon: <Group />,
  
},
{
  label: 'Post History',
  path: '/admin3/history/add-history',
  icon: <Group />,
  
},
]


///////
// user imports




  const userSidebarItems =  [
    {
      label: ' Confirm Appointment Date',
      path: '/user/confirm-appointment',
      icon: <Event/>,
    },
    {
      label: 'Check Your Status',
      path: '/user/check-status',
      icon: <Update />,
    },
    {
      label: 'Upload Files',
      path: '/user/upload-files',
      icon: <ChatIcon />,
    },
    {
      label: 'View Feedback on Report',
      path: '/user/view-feedback',
      icon: <Description />,
    },
    {
      label: 'Set Project Status',
      path: '/user/set-project-status',
      icon: <Add />,
    },
    
  ]


/////


const ConditionalNavbar = () => {
  const navigate = useNavigate(); 
  const path = window.location.pathname;


 
  if (
  path.startsWith('/login') ||
  path.startsWith('/auth/register') ||
  path.startsWith('/admin') || 
  path.startsWith('/admin2') || 
  path.startsWith('/admin3') ||
  path.startsWith('/user') 
   ) {
    return null
  }

  // Check if the path starts with '/admin/'
  // if (path.startsWith('/admin')) {
  //   return <AdminHeader />;
  // }



  // If the path is neither Login/Register nor under /admin, render Navbar
  return <Navbar />;
};




const ConditionalFooter = () => {
  const path = window.location.pathname;

  if (path.startsWith('/admin') ||       
      path.startsWith('/user')||
      path.startsWith('/login') ||
      path.startsWith('/auth/register')) {
    return null;
  }
  
  return <Footer />;
}

const RoutesComponent = () => {
   
  const [isAdminRoute, setIsAdminRoute] = useState(false);
  const path = window.location.pathname;
    const isAdmin = path.startsWith('/admin') || path.startsWith('/user') ;

  useEffect(() => {
    
    setIsAdminRoute(isAdmin);
  }, [isAdmin]);
  

  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/graph" element={<GraphicalAnalysis />} />
        <Route path="/protect" element={<ProtectAdmin />} />
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route path='/resources/accepted-projects' element={<AcceptedProjects/>}/>
        <Route path='/resources/history' element={<History/>}/>
        <Route path='/achivment/:id' element={<Achivments/>}/>
        <Route path='/startApplication' element={<StartApplication/>}/>




        
        
        
        <Route p ath='/footer' element={<FooterForm/>}/>
        <Route path='/resources/publications' element={<Publications/>}/>
        <Route path='/institutes' element={<Institutes />}/>
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />

        <Route path='/forget' element={<ForgetPassowed/>}/>
        <Route path="/reset/:id/:token"  element={<RestPassowrd/>}/>
        
        <Route path="/auth/register" element={<Register />} />
        <Route path='/viewNews' element={<ViewNews/>}></Route>
        <Route path='/resources/publications/description' element={<ProjectDescription/>}/>
        <Route path='/institutes/national-research' element={<NationalResearchInstitutes />}></Route>
        <Route path='/institutes/international-research' element={<InternationalResearchInstitutes />}></Route>
        <Route path='/institutes/labs' element={<Laboratories />}></Route>
        <Route path='/institutes/ict' element={<IctPartners />}></Route>
        <Route path='/institutes/government' element={<GovernmentAgencies />}></Route>
        <Route path='/institutes/other' element={<Others />}></Route>  
      </Routes>


      {/* user routes  */}
      <Routes 
         >
          <Route path = '/user'
                element={
                    
                            <ThemedLayout
                                Header={() =><UserHeader/>}
                                // Footer = {()=> <Footer/>}
                                Sider={() =><Sider   sidebarItems= {userSidebarItems} />}
                              
                            >
                              <Outlet/>
                            </ThemedLayout>                                                                          
                }
          >
            <Route index element={<UserDashboard />} />
            <Route path='confirm-appointment' element={<ConfirmAppointment />} ></Route>
            <Route path='check-status' element={<CheckStatus />}></Route>
            <Route path='upload-files' element={<UploadReport />}></Route>
            <Route path='view-feedback' element={<FeedbackReport />}></Route>
            <Route path='set-project-status' element={<SetProjectStatus/>}></Route>

          </Route>                                                 
        
        </Routes>  
        {/* admin routes */}
        <Routes>                      

            <Route path = '/admin'
                  element={
                      
                              <ThemedLayout
                                  Header={() =><UserHeader />}
                                  // Footer = {()=> <Footer/>}
                                  Sider={() =><Sider   sidebarItems= {adminSidebarItems} />}
                                
                              >
                                <Outlet/>
                              </ThemedLayout>
                              
                                                
                  }
              >
                  <Route index element={<Admin/>} />
                  
                  <Route path='appointments/add-appointment' element={<SetAppointmentDate/>}/>
                  <Route path='user-status/add-user-status' element={<UpdateUserStatus/>}/>
                  <Route path='viewFeedback/view-feedback' element={<ViewFeedback/>}/>
                  <Route  path='viewReports' element={<ViewReports/>}></Route>
                  <Route  path='viewFile' element={<ViewFile/>}></Route>               
                  <Route  path='addAdmin' element={<AddAdmin/>}></Route>                  
            </Route>

              
            <Route path='/admin2' element= {
                  <ThemedLayout
                  Header={() =><UserHeader />}
                  // Footer = {()=> <Footer/>}
                  
                  Sider={() => <Sider    sidebarItems = { admin2SidebarItems} />}
                >

                    <Outlet/>

                  </ThemedLayout>
                }
              >
            <Route  index  element={<Admin2 />}/>
            <Route  path='viewReports' element={<ViewReports2/>}></Route>
            <Route  path='viewFile' element={<ViewFile/>}></Route>
            <Route  path='projectFeedback' element={<ProjectFeedback/>}/>
            <Route  path='submitReport' element={<SubmitReport/>}/>

            </Route>

            <Route path='/admin3' element= {
                  <ThemedLayout
                  Header={() =><UserHeader />}
                  // Footer = {()=> <Footer/>}
                  
                  Sider={() => <Sider    sidebarItems = { admin3SidebarItems} />}
                >

                    <Outlet/>

                  </ThemedLayout>
                }
              >
              <Route  index  element={<Admin3 />}/>

              <Route path='news/add-news' element={<PostNews/>}/>
              <Route path='calls/add-call' element={<PostCalls/>}/>
              <Route path='publications/add-publication' element={<PostPublications/>}/>
              <Route path='accepted-projects/add-accepted-project' element={<PostAcceptedProjects/>}/>
              <Route path='history/add-history' element={<PostHistory/>}/>
              <Route path='institutes/post-to-institutes' element={<PostInstitutes/>}/>
              <Route path='collaboration/post-to-collaboration' element={<PostCollaborations/>}/>


            </Route>

        
          
        </Routes> 


        <ConditionalFooter/>
    </Router>
  );
}


export default RoutesComponent;