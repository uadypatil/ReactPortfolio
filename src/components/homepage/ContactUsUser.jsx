import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../index.css';

const ContactUsUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        message: ''
    });

    const [statusMessage, setStatusMessage] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://democonnection.netlify.app/.netlify/functions/contactUs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatusMessage('✅ Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    contactNumber: '',
                    message: ''
                });
            } else {
                const errorText = await response.text();
                setStatusMessage(`❌ Failed to send message. (${response.status})`);
                console.error('Server response error:', errorText);
            }
        } catch (error) {
            setStatusMessage('⚠️ Error occurred while sending data.');
            console.error('Fetch error:', error);
        }

    };

    return (
        <div className="container-fluid m-0 hero-container py-5 bg-light" id="certification">
            <div className="container w-50" data-aos="fade-up">
                <h2 className="text-center mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} method='POST' className="p-4 rounded bg-white shadow-sm">
                    <div className="mb-3" data-aos="fade-right">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3" data-aos="fade-right">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4">Submit</button>
                    </div>
                    {statusMessage && (
                        <div className="mt-3 text-center">
                            <small>{statusMessage}</small>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactUsUser;
