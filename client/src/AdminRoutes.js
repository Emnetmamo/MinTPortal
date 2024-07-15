import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom';


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
import ViewNews from './pages/ViewNews.js';
import ProtectAdmin from './ProtectAdmin.js';
import ViewReports from './pages/admin/ViewReports.js';

// import Header1 from './components/Layout/Navbar/Navbar1.js'
// import Header2 from './components/Layout/Navbar/Navbar2.js'
// import Header3 from './components/Layout/Navbar/Navbar3.js'
import UserHeader from './components/Layout/Navbar/UserHeader.js';
import Footer from './pages/Footer.js';
import Sider from  './components/Layout/Sidebar.js'
import {ThemedLayout} from './components/Layout/ThemdLayout.js'
import Admin2 from './pages/admin2/Admin2.js';
import ViewReports2 from './pages/admin2/ViewReports2.js';
import ProjectFeedback from './pages/admin2/ProjectFeedback.js';
import SubmitReport from './pages/admin2/SubmitReport.js';


import Admin3 from './pages/admin3/Admin3.js';



const  AdminRoutes = () =>{
   
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

return(
         <Routes>                      

          <Route path = '/admin'
                element={
                    
                            <ThemedLayout
                                Header={() =><UserHeader />}
                                Footer = {()=> <Footer/>}
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
                Footer = {()=> <Footer/>}
                
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
                Footer = {()=> <Footer/>}
                
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
)}

export default AdminRoutes