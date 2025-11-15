// src/components/homepage/WAchievements.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Award, TrendingUp, Star, Code, Users } from 'lucide-react';

const WAchievements = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    // Dynamic achievements data - easily extensible array for future updates
    const achievements = [
        {
            icon: Award,
            title: '⭐ Intern of the Month — May 2024',
            description: 'Recognized for exceptional performance during the internship by contributing to the development of scalable web applications, improving system stability, and delivering features ahead of deadlines. Played a key role in optimizing application workflows and supporting successful project deployments..',
            // stat: '10+',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: Award, // TrendingUp
            title: '🏆Employee of the Year — 2024–25',
            description: 'Awarded for outstanding contributions to backend optimization, including implementing advanced caching strategies, database tuning, and lazy loading. These improvements significantly enhanced application performance, reduced server load, and elevated the user experience across core company products.',
            // stat: '40%',
            color: 'from-green-500 to-green-600'
        },
        // {
        //     icon: Star,
        //     title: 'Open-Source Contributions',
        //     description: 'Actively contributed to React and Java libraries on GitHub, earning 500+ stars and community recognition for innovative features.',
        //     stat: '500+',
        //     color: 'from-purple-500 to-purple-600'
        // },
        {
            icon: Code,
            title: 'Full-Stack Mastery',
            description: 'Delivered end-to-end development across 15+ projects, ranging from dynamic websites to enterprise-grade applications, demonstrating strong proficiency in both frontend and backend technologies..',
            // stat: '2x Certified',
            color: 'from-indigo-500 to-indigo-600'
        },
        // {
        //     icon: Users,
        //     title: 'Team Leadership & Mentorship',
        //     description: 'Mentored junior developers and led cross-functional teams of up to 8, fostering agile practices and delivering projects 20% ahead of schedule.',
        //     stat: '8+ Team Size',
        //     color: 'from-amber-500 to-amber-600'
        // }
    ];

    return (
        <section id="achievements" className="py-20 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Key <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-700 bg-clip-text text-transparent">Achievements</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Milestones that highlight my impact in full-stack development and beyond.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
                    {achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                        {achievement.stat}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WAchievements;