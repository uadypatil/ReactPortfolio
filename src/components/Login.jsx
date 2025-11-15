// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem('loginStatus') === 'true') {
            navigate('/admin/dashboard');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === 'Uday@port1') {
            setMessage('✅ Login successful!');
            setTimeout(() => {
                sessionStorage.setItem('loginStatus', 'true');
                navigate('/admin/dashboard');
            }, 1000);
        } else {
            setMessage('❌ Invalid username or password.');
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen bg-gray-100"
        >
            <motion.div
                className="bg-white p-8 shadow-xl rounded-2xl w-[400px]"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl font-semibold text-center mb-5">
                    Login
                </h2>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                    >
                        Login
                    </button>
                </form>

                {message && (
                    <p className="text-center mt-4 text-sm font-medium">
                        {message}
                    </p>
                )}
            </motion.div>
        </div>
    );
}

export default Login;
