import React from 'react';
import Navbar from './Navbar';
import Hero from './homepage/Hero';
import AboutUs from './homepage/AboutUs';
import Education from './homepage/Education';
import Projects from './homepage/Projects';
import Skills from './homepage/Skills';
import Certification from './homepage/Certification';
import NatureExplorer from './homepage/NatureExplorer';
import Footer from './homepage/Footer';
import ContactUsUser from './homepage/ContactUsUser';

const Homepage = () => {
    return (
        <div >
            <Navbar />
            <Hero />
            <AboutUs />
            <Education />
            <Projects />
            <Skills />
            <Certification />
            {/* <NatureExplorer /> */}
            <ContactUsUser />
            <Footer />

        </div>
    )
}

export default Homepage;