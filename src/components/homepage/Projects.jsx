import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const Projects = () => {
    return (
        <div className="container-fluid m-0 hero-container hero-education-container h-auto" id='projects'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <h3 className='text-center mb-4 text-headline fw-bold' data-aos="fade-right">
                            Projects
                        </h3>
                    </div>

                    <div className="col-lg-12">
                        <div className="custom-project-card" data-aos="fade-down">
                            <div className=" mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h3>HPCL Inout Access Control System</h3>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>

                                <div className="visible-container1 hide1">
                                    <hr />

                                    <p className='text-start'><small className='text-secondary'>at</small> Manasvi.tech</p>
                                    <p className='w-75'>
                                        A secure, standalone access control system designed to track and manage personnel entry and exit in real time. The application provides role-based authentication and authorization for Admins, Security Personnel
                                    </p>
                                    <h4>Key Features:</h4>
                                    <ul className='text-start'>
                                        <li>
                                            User registration and access management
                                        </li>
                                        <li>
                                            Real-time in/out tracking with timestamp logs
                                        </li>
                                        <li>
                                            Role-based access: Admin, Security, and User
                                        </li>
                                        <li>
                                            Dashboard with analytics and activity summaries
                                        </li>
                                        <li>
                                            Daily/weekly reports exportable in Excel/PDF
                                        </li>
                                    </ul>
                                    <h4>My Role:</h4>
                                    <p>Team lead and backend developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="custom-project-card" data-aos="fade-down">
                            <div className="mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h3>HPCL Refinery Management System</h3>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>

                                <div className="visible-container1 hide1">
                                    <hr />
                                    <p className=''><small className='text-secondary'>at</small> Manasvi.tech</p>
                                    <p className=''>
                                        A secure, standalone refinery management system developed to streamline and monitor operations within HPCL facilities. The application provides role-based access for Admins, Supervisors, and Operators to manage refinery data, monitor equipment performance, and log daily activities in real time.
                                    </p>
                                    <h4>Key Features:</h4>
                                    <ul>
                                        <li>
                                            Role-based authentication for Admin, Supervisor, and Operator
                                        </li>
                                        <li>
                                            Real-time tracking of refinery operations and equipment status
                                        </li>
                                        <li>
                                            Daily task logging and shift handover reports
                                        </li>
                                        <li>
                                            Maintenance scheduling and alert notifications
                                        </li>
                                        <li>
                                            Dashboard for KPI visualization and analytics
                                        </li>
                                    </ul>
                                    <h4>My Role:</h4>
                                    <p>Team lead and backend developer</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="custom-project-card" data-aos="fade-down">
                            <div className=" mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h3>Peehu Hooda – An Astrologer</h3>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>
                                <hr />
                                <p className=''><small className='text-secondary'>at</small> Manasvi.tech</p>
                                <p className=''>
                                    A dynamic astrology-based web application designed to manage client products, bookings, and service listings. The system includes separate interfaces for users and admins. Admins have role-based authentication and authorization to manage content, bookings, and customer data efficiently.
                                </p>
                                <h4>Key Features:</h4>
                                <ul>
                                    <li>
                                        Separate interfaces for users and admins
                                    </li>
                                    <li>
                                        Product and service management for astrology consultations
                                    </li>
                                    <li>
                                        Booking system with calendar integration
                                    </li>
                                    <li>
                                        Admin authentication and secure access controls
                                    </li>
                                    <li>
                                        Fully dynamic content management through the backend
                                    </li>
                                </ul>
                                <h4>My Role:</h4>
                                <p>Backend Developer – responsible for building backend functionalities, implementing authentication and authorization, and integrating APIs with frontend components for dynamic data display.</p>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="custom-project-card" data-aos="fade-down">
                            <div className=" mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h3>EternalBliss – An Angel Healer</h3>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>
                                <hr />
                                <p className=''><small className='text-secondary'>as a</small> Freelancer</p>
                                <p className=''>
                                    A fully dynamic web application developed for EternalBliss, a platform offering spiritual healing, wellness courses, and appointments. The system allows users to enroll in courses, book appointments, and explore services. Admins have authenticated access to manage content, bookings, and user records efficiently.
                                </p>
                                <h4>Key Features:</h4>
                                <ul>
                                    <li>
                                        User and admin interfaces with access authentication and authorization
                                    </li>
                                    <li>
                                        Course enrollment and appointment booking system
                                    </li>
                                    <li>
                                        Dynamic content management for services and offerings
                                    </li>
                                    <li>
                                        Integrated frontend and backend with secure communication
                                    </li>
                                    <li>
                                        Clean and functional UI/UX tailored to client needs
                                    </li>
                                </ul>
                                <h4>My Role:</h4>
                                <p>Full-stack Developer – responsible for frontend and backend development, implementing access control logic, integrating APIs, and delivering a fully functional, user-friendly interface for client and user interaction.</p>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-lg-12">
                        <div className="" data-aos="fade-down">
                            <div className=" mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h4>ERP System</h4>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>
                                <p><small>at</small> Manasvi.tech</p>
                                <hr />
                                <p className=''>Project Manager, Team Lead</p>
                                <p className=''>
                                    Led and managed the development team to ensure successful planning, execution, and delivery of the ERP system.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="" data-aos="fade-down">
                            <div className=" mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h4>Invoice Management System</h4>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>
                                <p><small>at</small> Manasvi.tech</p>
                                <hr />
                                <p className=''>Full Stack Developer</p>
                                <p className=''>
                                    Collaborated with team members to develop both backend and frontend modules with complete responsibility for implementing business logic.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="" data-aos="fade-down">
                            <div className=" mb-5 text-start">
                                <div className="d-flex gap-3">
                                    <h4>Sevakalpak – A Service Provider</h4>
                                    {/* <button className='btn btn-primary'>Show</button> */}
                                </div>
                                <p><small>at</small> EagleByte Solutions</p>
                                <hr />
                                <p className=''>Backend Developer</p>
                                <p className=''>
                                    Designed and developed backend APIs, handled integration with frontend, and implemented secure authentication and authorization for all user operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;