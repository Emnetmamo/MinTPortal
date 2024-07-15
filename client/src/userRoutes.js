import React from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, Outlet } from 'react-router-dom';

import DashboardIcon from "@mui/icons-material/Dashboard";
import { Add,Chat as ChatIcon, Description, Update, Event, Info, Announcement, CheckCircle, AccountBalance, Group } from '@mui/icons-material';

import Footer from './pages/Footer.js';
import Sider from  './components/Layout/Sidebar.js'
import {ThemedLayout} from './components/Layout/ThemdLayout.js'

//user components
import UserHeader from './components/Layout/Navbar/UserHeader.js';
import UserDashboard from './pages/user/UserDashboard.js';
import ConfirmAppointment from './pages/user/ConfirmAppointment';
import CheckStatus from './pages/user/CheckStatus';
import UploadReport from './pages/user/UploadReport';
import FeedbackReport from './pages/user/FeedbackReport';
import SetProjectStatus from './pages/user/SetProjectStatus';


const  UserRoutes = () =>{

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
  

return(
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
)}

export default UserRoutes