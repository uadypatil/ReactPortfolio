import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Homepage';
import ArgComponent from './components/ArgumentComponent';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper and Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/homepage/AboutUs';

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />          {/* Default route */}
            <Route path="/about" element={<About />} />    {/* /about route */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
