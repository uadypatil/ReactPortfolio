// src/components/homepage/WAbout.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import myPic from '../../../assets/mewithnature.jpg'; // Assuming asset path
import myPic from '../../../assets/meinmeetings.jpg'; // Assuming asset path



const WAbout = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-gray-900 mb-6" data-aos="fade-up">About Me</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">A results-driven developer crafting innovative solutions that drive business growth.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center" data-aos="fade-up" data-aos-delay="400">
                    <div>
                        <img src={myPic} alt="About Uday" className="rounded-3xl shadow-2xl w-full" data-aos="zoom-in" />
                    </div>
                    <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With 2+ years in software development, I specialize in full-stack engineering, focusing on Java backend ecosystems and React frontends. I've led teams on enterprise projects for clients like HPCL, delivering secure, scalable systems that handle real-time data and user workflows seamlessly.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Beyond code, I'm a lifelong learner—pursuing my Master's in Computer Applications while contributing to open-source and mentoring juniors. Let's collaborate to turn your vision into reality.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {[
                                { icon: '🎓', label: 'MCA Pursuing' },
                                { icon: '🏆', label: '8.54 CGPA BCA' },
                                { icon: '💼', label: '2+ Years Exp' },
                                { icon: '🌟', label: '10+ Projects' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center p-4 bg-amber-50 rounded-xl" data-aos="fade-up" data-aos-delay={i * 100}>
                                    <div className="text-2xl mb-2">{stat.icon}</div>
                                    <p className="font-bold text-gray-900">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WAbout;