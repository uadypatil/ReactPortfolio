// src/components/homepage/WExperience.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WExperience = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    const experiences = [
        {
            title: 'Senior Software Developer',
            company: 'Manasvi Tech Solutions',
            period: 'Jun 2025 - Present',
            desc: 'Leading backend development for enterprise apps using Spring Boot & Hibernate. Optimized query performance by 35%, reducing load times.',
            iconColor: 'from-amber-500 to-orange-500'
        },
        {
            title: 'Junior Software Developer',
            company: 'Manasvi Tech Solutions',
            period: 'Jun 2024 - Jun 2025',
            desc: 'Built dynamic web apps with React & CodeIgniter. Integrated APIs for real-time data, handling 10k+ daily transactions.',
            iconColor: 'from-emerald-500 to-green-500'
        },
        {
            title: 'Web Developer Intern',
            company: 'EagleByte Solutions',
            period: 'Mar 2024 - May 2024',
            desc: 'Developed backend APIs with PHP/CodeIgniter. Implemented secure auth for user ops, improving system security.',
            iconColor: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Web Developer Intern',
            company: 'Passion Software Solutions',
            period: 'Jan 2024 - Feb 2024',
            desc: 'Hands-on with HTML/CSS/JS/PHP for frontend-backend integration. Contributed to client websites with responsive designs.',
            iconColor: 'from-purple-500 to-violet-500'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gradient-to-r from-amber-50 via-white to-amber-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 mb-6" data-aos="fade-up">Professional Journey</h2>
                    <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">From internships to senior roles, building expertise one project at a time.</p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {experiences.map((exp, i) => (
                        <div key={i} className="group bg-white p-8 rounded-3xl border border-amber-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" data-aos="fade-up" data-aos-delay={i * 150}>
                            <div className="flex items-start gap-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${exp.iconColor} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                                        <span className="text-sm text-gray-500">{exp.period}</span>
                                    </div>
                                    <p className="text-lg font-semibold text-amber-600 mb-3">{exp.company}</p>
                                    <p className="text-gray-600 leading-relaxed">{exp.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WExperience;