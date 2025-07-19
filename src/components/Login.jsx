// src/components/Login.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // ✅ React Router hook

    useEffect(() => {
        // Redirect to dashboard if already logged in
        if (sessionStorage.getItem('loginStatus') === 'true') {
            navigate('/admin/dashboard');
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy login check
        if (username === 'admin' && password === 'Uday@port1') {
            setMessage('✅ Login successful!');
            setTimeout(() => {
                sessionStorage.setItem('loginStatus', 'true');
                navigate('/admin/dashboard'); // ✅ redirect after a brief delay
            }, 1000); // 1 second delay to show success message
        } else {
            setMessage('❌ Invalid username or password.');
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100 bg-light"
            style={{ cursor: 'default' }} // or 'auto'
        >
            <motion.div
                className="card p-4 py-5 shadow-lg"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ width: '400px', borderRadius: '1rem' }}
            >
                <h2 className="text-center mb-3">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                {message && <p className="text-center mt-3">{message}</p>}
            </motion.div>
        </div>
    );
}

export default Login;
