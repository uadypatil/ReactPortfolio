// src/components/homepage/WProjects.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WProjects = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    const projects = [
        {
            title: 'HPCL In/Out Access Control System',
            desc: 'Secure real-time personnel tracking with role-based auth. Features: User mgmt, analytics dashboard, Excel/PDF exports.',
            role: 'Team Lead & Backend Dev',
            company: 'Manasvi Tech',
            link: '#', // Add demo/live link
            tech: 'Spring Boot, React, MySQL'
        },
        {
            title: 'HPCL Refinery Management System',
            desc: 'Streamlined ops monitoring with KPIs, maintenance alerts, and shift reports for refinery teams.',
            role: 'Team Lead & Backend Dev',
            company: 'Manasvi Tech',
            link: '#',
            tech: 'Java, Hibernate, React'
        },
        {
            title: 'Peehu Hooda Astrology Platform',
            desc: 'Dynamic booking & service mgmt for astrologers. Includes admin auth, calendar integration, and content CMS.',
            role: 'Backend Developer',
            company: 'Manasvi Tech',
            link: '#',
            tech: 'CodeIgniter, PHP, JS'
        }, {
            title: 'Edusuite ERP System',
            desc: 'Comprehensive ERP platform for managing students, staff, fees, attendance, exams, and content workflows with secure authentication and role-based access.',
            role: 'Backend Developer',
            company: 'Manasvi Tech',
            link: '#',
            tech: 'Laravel, PHP, RESTful APIs'
        },
        {
            title: 'EternalBliss Angel Healer App',
            desc: 'End-to-end wellness platform offering online courses, appointment booking, payment integration, and secure user onboarding with an admin CMS.',
            role: 'Full-Stack Developer',
            company: 'Freelance',
            link: '#',
            tech: 'CodeIgniter, PHP, JS'
        },
        {
            title: 'KPixel Solutions Official Website',
            desc: 'Corporate portfolio website featuring service showcases, dynamic content sections, lead forms, and fully responsive UI for improved brand presence.',
            role: 'Full-Stack Developer',
            company: 'Freelance',
            link: '#',
            tech: 'CodeIgniter, PHP, JS'
        },
        {
            title: 'HelpDeskPro ITSM System',
            desc: 'IT service management platform enabling ticket tracking, asset management, user roles, notifications, and analytics dashboards for enterprise support teams.',
            role: 'Full-Stack Developer',
            company: 'Freelance',
            link: '#',
            tech: 'React, Node.js, MongoDB'
        },
        {
            title: 'More 10+ projects',
            desc: 'Delivered 10+ additional projects including enterprise systems, dashboards, business websites, and API-driven applications for companies and freelance clients.',
            role: 'Full-Stack Developer',
            company: 'Manasvi Tech, Freelance',
            link: '#',
            tech: 'Java (Spring Boot, Hibernate), React, Node.js, PHP (CI, Laravel), RESTful APIs, MongoDB, MySQL'
        }

    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 mb-6" data-aos="fade-up">Featured Projects</h2>
                    <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">Real-world solutions that showcase my expertise.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((proj, i) => (
                        <div key={i} className="group bg-white p-8 rounded-3xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden" data-aos="flip-left" data-aos-delay={i * 150}>
                            {/* <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl mb-6 group-hover:scale-105 transition-transform"></div> Placeholder for project image */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{proj.title}</h3>
                            <p className="text-gray-600 mb-4">{proj.desc}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-semibold text-amber-600">{proj.role} @ {proj.company}</span>
                                <span className="text-sm text-gray-500">{proj.tech}</span>
                            </div>
                            <a href={proj.link} className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WProjects;