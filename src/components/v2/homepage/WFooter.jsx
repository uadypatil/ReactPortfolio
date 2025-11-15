// src/components/homepage/WFooter.jsx
import React from 'react';
import { Zap } from 'lucide-react';

const WFooter = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                    {/* <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                    </div> */}
                    <span className="text-2xl font-black text-white">Uday Patil</span>
                </div>
                <p className="text-lg mb-4">© 2025 Uday Patil • Built with ❤️ in India</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://linkedin.com/in/udayapatil" className="text-gray-400 hover:text-amber-400 transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/theudaypatil" className="text-gray-400 hover:text-amber-400 transition-colors">
                        Instagram
                    </a>
                    <a href="mailto:uday@example.com" className="text-gray-400 hover:text-amber-400 transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default WFooter;