// src/components/WNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X, Building2, Users } from 'lucide-react';

const WNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/95 border-b border-amber-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3">
                    {/* <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Zap className="w-5 h-5 text-white" />
                    </div> */}
                    <span className="text-2xl font-black bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                        Uday Patil
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#about" className="text-gray-700 hover:text-amber-600 font-semibold text-base transition-all duration-300">About</a>
                    <a href="#experience" className="text-gray-700 hover:text-amber-600 font-semibold text-base transition-all duration-300">Experience</a>
                    <a href="#skills" className="text-gray-700 hover:text-amber-600 font-semibold text-base transition-all duration-300">Skills</a>
                    <a href="#projects" className="text-gray-700 hover:text-amber-600 font-semibold text-base transition-all duration-300">Projects</a>
                    <a href="#certifications" className="text-gray-700 hover:text-amber-600 font-semibold text-base transition-all duration-300">Certifications</a>
                    <a href="#contact" className="text-gray-700 hover:text-amber-600 font-semibold text-base transition-all duration-300">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-amber-100 shadow-lg md:hidden">
                        <nav className="px-6 py-4 space-y-4">
                            <a href="#about" className="block text-gray-700 hover:text-amber-600 font-semibold">About</a>
                            <a href="#experience" className="block text-gray-700 hover:text-amber-600 font-semibold">Experience</a>
                            <a href="#skills" className="block text-gray-700 hover:text-amber-600 font-semibold">Skills</a>
                            <a href="#projects" className="block text-gray-700 hover:text-amber-600 font-semibold">Projects</a>
                            <a href="#certifications" className="block text-gray-700 hover:text-amber-600 font-semibold">Certifications</a>
                            <a href="#contact" className="block text-gray-700 hover:text-amber-600 font-semibold">Contact</a>
                        </nav>
                    </div>
                )}

                {/* CTA Button */}
                <Link
                    to="#contact"
                    className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                    Hire Me
                </Link>
            </div>
        </header>
    );
};

export default WNavbar;