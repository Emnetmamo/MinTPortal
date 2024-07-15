import Layout from './pages/admin/Layout'
import Admin from './pages/admin/Admin'
import SetAppointmentDate from './pages/admin/SetAppointmentDate'
import UpdateUserStatus from './pages/admin/UpdateUserStatus'
import ViewFeedback from './pages/admin/ViewFeedback'
import ViewFile from './pages/admin/ViewFile'
import ViewNews from './pages/ViewNews'
import ViewReports from './pages/admin/ViewReports'
import Home from './pages/Home'
import {Routes,Route} from 'react-router-dom'

import React, { useCallback } from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const ProtectAdmin = () => {
    const[role,setdata]=useState('')
    useEffect(()=>{
        axios.get('http://localhost:5001/authl/protect')
        .then(result=>{
            console.log(result.data)
            setdata(result.data)})
        .catch(error=>{console.log(error)});
    },[])
    let isAuth = false;

    if (role==='admin') {
      isAuth = true;
    }
  return (
    <>
    {isAuth?(
        <Routes>
       <Route path='/admin' element = {<Layout />}>
          <Route  index element= {<Admin/>}/>
          <Route path='appointments/add-appointment' element={<SetAppointmentDate/>}/>
          <Route path='user-status/add-user-status' element={<UpdateUserStatus/>}/>
          <Route path='viewFeedback/view-feedback' element={<ViewFeedback/>}/>
          <Route  path='viewFile' element={<ViewFile/>}></Route>
          <Route  path='viewNews' element={<ViewNews/>}></Route>
          <Route  path='viewReports' element={<ViewReports/>}></Route>
        </Route>
        </Routes>
    ):(<Home/>)}
    </>
  )
}

export default ProtectAdmin
