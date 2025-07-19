// Logout.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // ✅ Clear session storage
        // sessionStorage.removeItem('isLoggedIn');
        // sessionStorage.setItem('loginStatus', 'true');
        sessionStorage.clear(); // optional, clears all session data

        // ✅ Redirect to login page
        navigate('/admin/login');
    }, [navigate]);

    return null;
}

export default Logout;
