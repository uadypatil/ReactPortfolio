// src/pages/WHomepage.jsx
import React from 'react';
import WNavbar from '../components/v2/homepage/WNavbar';
import WHero from '../components/v2/homepage//WHero';
import WAbout from '../components/v2/homepage//WAbout';
import WExperience from '../components/v2/homepage//WExperience';
import WSkills from '../components/v2/homepage//WSkills';
import WProjects from '../components/v2/homepage//WProjects';
import WCertifications from '../components/v2/homepage//WCertifications';
import WContact from '../components/v2/homepage//WContact';
import WFooter from '../components/v2/homepage//WFooter';
import WAchievements from '../components/v2/homepage/WAchievements';

const WHomepage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
            <WNavbar />
            <WHero />
            <WAbout />
            <WExperience />
            <WSkills />
            <WProjects />
            <WCertifications />
            <WAchievements />
            <WContact />
            <WFooter />
        </div>
    );
};

export default WHomepage;