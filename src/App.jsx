import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Homepage';
import ArgComponent from './components/ArgumentComponent';
import './App.css'
import './NatureExplorerStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper and Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/homepage/AboutUs';
import Login from './components/Login';
import Dashboard from './components/admin/Dashboard';
import Logout from './components/Logout';

import DashboardWrapper from './components/admin/DashboardWrapper';
import ContectContent from './components/admin/ContectContent';
import HiringContent from './components/admin/HiringContent';

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/logout" element={<Logout />} />

            {/* Dashboard layout with nested routes */}
            <Route path="/admin" element={<Dashboard />}>
              <Route path="dashboard" element={<DashboardWrapper />} />
              <Route path="contact" element={<ContectContent />} />
              <Route path="hirings" element={<HiringContent />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
