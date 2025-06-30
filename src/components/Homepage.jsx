import React from 'react';
import Navbar from './Navbar';
import Hero from './homepage/Hero';
import AboutUs from './homepage/AboutUs';
import Education from './homepage/Education';
import Projects from './homepage/Projects';
import Skills from './homepage/Skills';
import Certification from './homepage/Certification';
import Footer from './homepage/Footer';

const Homepage = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            {/* <AboutUs /> */}
            <Education />
            <Projects />
            <Skills />
            <Certification />
            <Footer />

        </div>
    )
}

export default Homepage;