// src/components/homepage/WCertifications.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WCertifications = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    const certs = [
        {
            title: 'REST API: Architecture & Databases Deployment',
            issuer: 'Skillsoft',
            desc: 'Mastered RESTful design, DB integration, and deployment for scalable APIs.',
            link: 'https://www.linkedin.com/posts/udayapatil_restapi-certification-apidevelopment-activity-7301212348243972096-bGsS'
        },
        {
            title: 'Helping Customers Find You',
            issuer: 'Skillsoft',
            desc: 'SEO strategies and digital visibility techniques for enhanced online presence.',
            link: 'https://www.linkedin.com/posts/udayapatil_learning-certification-skillsoft-activity-7301210233542950912-QA_9'
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 mb-6" data-aos="fade-up">Certifications</h2>
                    <p className="text-xl text-gray-600" data-aos="fade-up" data-aos-delay="200">Continuous learning to stay ahead in tech.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {certs.map((cert, i) => (
                        <div key={i} className="group bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" data-aos="zoom-in" data-aos-delay={i * 150}>
                            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                <span className="text-white text-2xl">🏆</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                            <p className="text-gray-600 mb-4">{cert.desc}</p>
                            <p className="text-sm text-amber-600 font-semibold mb-4">{cert.issuer}</p>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-bold hover:text-amber-700 transition-colors">
                                View on LinkedIn →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WCertifications;