// src/components/homepage/WContact.jsx
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const WContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: true,
            offset: 80,
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate form submission (replace with your Netlify/actual endpoint)
        setStatus('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-white mb-6" data-aos="zoom-in">Let's Connect</h2>
                    <p className="text-xl text-amber-100" data-aos="zoom-in" data-aos-delay="200">Ready to discuss your next project? Drop a message.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12" data-aos="fade-up" data-aos-delay="400">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                            <Mail className="w-8 h-8 text-amber-200" />
                            <div>
                                <h4 className="font-bold text-white">Email</h4>
                                <p className="text-amber-100">uday1011patil@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                            <Phone className="w-8 h-8 text-amber-200" />
                            <div>
                                <h4 className="font-bold text-white">Phone</h4>
                                <p className="text-amber-100">+91 73859 75192</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                            <MapPin className="w-8 h-8 text-amber-200" />
                            <div>
                                <h4 className="font-bold text-white">Location</h4>
                                <p className="text-amber-100">Jalgaon, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/20 backdrop-blur-sm p-8 rounded-3xl" data-aos="fade-left" data-aos-delay="200">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-white/50 border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-white/50 border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-white/50 border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                            required
                        />
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl bg-white/50 border border-amber-200 focus:border-amber-500 focus:outline-none transition-colors"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            Send Message
                        </button>
                        {status && <p className="text-center text-white font-bold">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default WContact;