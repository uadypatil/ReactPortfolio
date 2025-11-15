// src/components/homepage/WHero.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Download, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myPic from '../../../assets/mypic.jpg'; // Assuming asset path

const WHero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <section className="pt-32 pb-20 px-6" data-aos="fade-up">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-base font-bold mb-6 shadow-md" data-aos="fade-down">
                    <Zap className="w-4 h-4 mr-2 animate-pulse" />
                    Full-Stack Developer | Java, React, Spring Boot
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
                            Building Scalable<br />
                            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-700 bg-clip-text text-transparent">
                                Web Solutions
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Passionate Senior Software Developer specializing in robust backend systems with Java/Spring Boot and dynamic React frontends. Delivered 10+ enterprise apps, optimizing performance by 40%+.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold text-lg shadow-xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            >
                                <Mail className="mr-2 w-5 h-5" />
                                Hire Me
                            </a><a
                                href="/resume.pdf"
                                download
                                className="px-8 py-4 bg-white border-2 border-amber-500 text-amber-600 rounded-xl 
                                            font-bold text-lg shadow-lg hover:bg-amber-50 transition-all duration-300 
                                            hover:scale-105 flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>

                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <img src={myPic} alt="Uday Patil" className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500" data-aos="zoom-in" data-aos-delay="400" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WHero;