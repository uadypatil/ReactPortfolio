import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HireMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        contactNumber: '',
        skillsNequired: '',
        jobTitle: '',
        jobDescription: '',
        salaryExpectations: '',
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
            const response = await fetch('https://democonnection.netlify.app/.netlify/functions/hireMe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatusMessage('✅ Application submitted successfully!');
                setFormData({
                    name: '',
                    companyName: '',
                    email: '',
                    contactNumber: '',
                    skillsNequired: '',
                    jobTitle: '',
                    jobDescription: '',
                    salaryExpectations: '',
                    message: ''
                });
            } else {
                setStatusMessage('❌ Failed to submit application.');
            }
        } catch (error) {
            setStatusMessage('⚠️ Error while sending application.');
            console.error(error);
        }
    };

    return (
        <>
            {/* Modal */}
            <div className="modal fade" id="hireMeModal" tabIndex="-1" aria-labelledby="hireMeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title" id="hireMeModalLabel">Hire Me</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="skillsNequired" placeholder="Skills Required" value={formData.skillsNequired} onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" name="jobDescription" placeholder="Job Description" rows="2" value={formData.jobDescription} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" name="salaryExpectations" placeholder="Salary Expectations" value={formData.salaryExpectations} onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" name="message" placeholder="Message" rows="2" value={formData.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </div>
                                <div className="col-12 text-center mt-2">
                                    <p>{statusMessage}</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HireMe;
