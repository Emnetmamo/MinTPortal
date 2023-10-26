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
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
import ResearchInstitutes from './components/Institutes/ResearchInstitutes';
import Laboratories from './components/Institutes/Laboratories';
import GovernmentAgencies from './components/Institutes/GovernmentAgencies';
import IctPartners from './components/Institutes/IctPartners';
import Publications from './pages/Publications';
import Institutes from './pages/Institutes';
import ProjectDescription from './pages/ProjectDescription';
import AcceptedProjects from './pages/AcceptedProjects';
import adminRoutes from './pages/admin/adminRoutes';
const ConditionalNavbar = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;

  if (path === '/login' || path === '/register'|| path==='/admin/news/add-news') {
    return null; // Render nothing for Login and Register pages
  }

  return <Navbar />;
}

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
      
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/resources" element={<Resources />} />
        <Route  path='/resources/acceptedProjects' element={<AcceptedProjects/>}/>
        <Route  path='/resources/publications' element={<Publications/>}/>
        <Route  path='/institutes' element={<Institutes />}/>
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
{/* <<<<<<< HEAD */}
{/*<<<<<<< Updated upstream*/}
        <Route path='/resources/publications/description' element={<ProjectDescription/>}/>
{/*=======*/}
=======

        <Route path='/resources/publications/description' element={<ProjectDescription/>}/>

{/* >>>>>>> 793a834cd50bdec0aceed799d3becb7e5294faf9 */}
        <Route  path='/institutes/research' element={<ResearchInstitutes />}></Route>
        <Route  path='/institutes/labs' element={<Laboratories />}></Route>
        <Route  path='/institutes/ict' element={<IctPartners />}></Route>
        <Route  path='/institutes/government' element={<GovernmentAgencies />}></Route>
{/* <<<<<<< HEAD */}
{/*>>>>>>> Stashed changes*/}
{/* ======= */}

{/* >>>>>>> 793a834cd50bdec0aceed799d3becb7e5294faf9 */}

      </Routes>
      <ConditionalFooter />
    </Router>
  );
}

export default RoutesComponent;
