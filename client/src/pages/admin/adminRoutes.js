import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PostNews from './PostNews'
import SetAppointmentDate from './SetAppointmentDate'
import UpdateUserStatus from './UpdateUserStatus'

import { BrowserRouter as Router, Routes,Route, Switch, Link } from 'react-router-dom';

const adminRoutes = () => {
  return (
  <div >
    <Router>
      <Routes>
        <Route path='/admin/news/add-news' element={<PostNews/>}></Route>
        <Route path='/admin/appontments/add-appointment' element={<SetAppointmentDate/>}></Route>
        <Route path='/admin/user-status/add-user-status' element={<UpdateUserStatus/>}></Route>
      </Routes>
    </Router>
    
  </div>
  );
}

export default adminRoutes;