// src/components/homepage/WSkills.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WSkills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    const skills = [
        { category: 'Backend', items: ['Java', 'Spring Boot', 'Hibernate', 'Node.js', 'PHP (CodeIgniter, Laravel)'] },
        { category: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
        { category: 'Database & Tools', items: ['MySQL', 'MongoDB', 'Git', 'Docker'] },
        { category: 'Soft Skills', items: ['Team Leadership', 'Problem Solving', 'Agile Methodology', 'API Creatin & Integration', 'GraphQL Implementation'] }
    ];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 mb-6" data-aos="fade-up">Core Skills</h2>
                    <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">Mastering technologies that power modern applications.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, i) => (
                        <div key={i} className="group bg-gradient-to-br from-amber-50 to-white p-6 rounded-3xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="zoom-in-up" data-aos-delay={i * 150}>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{skill.category}</h3>
                            <ul className="space-y-2">
                                {skill.items.map((item, j) => (
                                    <li key={j} className="text-gray-600 font-medium flex items-center group-hover:text-amber-600 transition-colors">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WSkills;