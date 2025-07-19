import React, { useEffect, useState } from 'react';
import AOS from 'aos';

function HiringContent() {

    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // ✅ New state for selected user

    useEffect(() => {
        AOS.init({ duration: 800 });

        const fetchData = () => {
            fetch('https://democonnection.netlify.app/.netlify/functions/hireMe')
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUsers(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };

        fetchData(); // Initial fetch

        const interval = setInterval(fetchData, 3000); // Re-fetch every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const openModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <>
            <div className="mx-3 h-full">
                <div className="table-responsive px-3 bg-white">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Company Name</th>
                                <th>Contact No</th>
                                <th colSpan={2}>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, index) => (
                                <tr key={u.id} data-aos="fade-up">
                                    <td>{index + 1}</td>
                                    <td>{u.name}</td>
                                    <td>{u.companyName}</td>
                                    <td>{u.contactNumber}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => openModal(u)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {showModal && selectedUser && (
                <div className="modal fade show d-block" tabIndex="-1">
                    <div className="modal-dialog modal-lg" data-aos="zoom-in">
                        <div className="modal-content shadow-lg rounded-4">
                            <div className="modal-header">
                                <h5 className="modal-title">Company Detail</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>{selectedUser.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Company Name</th>
                                            <td>{selectedUser.companyName}</td>
                                        </tr>
                                        <tr>
                                            <th>Email</th>
                                            <td>{selectedUser.email}</td>
                                        </tr>
                                        <tr>
                                            <th>Phone</th>
                                            <td>{selectedUser.contactNumber}</td>
                                        </tr>
                                        <tr>
                                            <th>Skills</th>
                                            <td>{selectedUser.skillsNequired}</td>
                                        </tr>
                                        <tr>
                                            <th>Job Title</th>
                                            <td>{selectedUser.jobTitle}</td>
                                        </tr>
                                        <tr>
                                            <th>Job Description</th>
                                            <td>{selectedUser.jobDescription}</td>
                                        </tr>
                                        <tr>
                                            <th>Salary Expectations</th>
                                            <td>{selectedUser.salaryExpectations}</td>
                                        </tr>
                                        <tr>
                                            <th>Message</th>
                                            <td>{selectedUser.message}</td>
                                        </tr>
                                        <tr>
                                            <th>Application Received At</th>
                                            <td>{selectedUser.createdAt}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default HiringContent;
