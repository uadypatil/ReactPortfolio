// Dashboard.js
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800 });

        if (sessionStorage.getItem('loginStatus') !== 'true') {
            navigate('/admin/login');
        }
    }, [navigate]);

    return (
        <div className="d-flex" style={{ cursor: 'default' }}>
            <Sidebar />
            <div className="main-content w-100">
                <Navbar />
                <div className="p-4" data-aos="fade-up">
                    <Outlet /> {/* This will render nested route components */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
