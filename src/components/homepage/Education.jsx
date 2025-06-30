import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const Education = () => {
    return (
        <div className="container-fluid m-0 hero-container bg-white h-auto" id='education'>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <h3 className='text-center mb-4 text-headline fw-bold'>
                            Education
                        </h3>
                    </div>
                    <div className="col-lg-4">
                        <div className="card shadow custom-edu-card">
                            <div className="card-body mb-4">
                                <h1>Master's</h1>
                                <p><small>in</small> Computer Application</p>
                                <hr />
                                <p className=''>KCE's IMR, Jalgaon | <small className='text-secondary'>2024 - 2026</small></p>
                                <p className='text-secondary'>pursuing Master in Computer Application at KCE's Institute of Management and Research, Jalgaon.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-5">
                        <div className="card shadow custom-edu-card">
                            <div className="card-body">
                                <h1>Bechalor's</h1>
                                <p><small>in</small> Computer Application</p>
                                <hr />
                                <p className=''>G H Raisoni, Jalgaon | <small className='text-secondary'>2021 - 2024</small></p>
                                <p className='text-secondary'>Have completed Bechalor's in Computer Application from G. H. Raisoni Institutionof Business Management, Jalgaon with 8.54 CGPA.</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>

                <div className="row justify-content-center mt-5" id="experience">
                    <div className="col-lg-12">
                        <h3 className='text-center mb-4 text-headline fw-bold'>
                            Experience
                        </h3>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow custom-edu-card">
                            <div className="card-body">
                                <h2>Sr. Software Developer</h2>
                                <p><small>at</small> Manasvi.tech</p>
                                <hr />
                                <p className=''>Manasvi Tech Solutions Pvt. Ltd | <small className='text-secondary'>Jun 2025 - Till now</small></p>
                                <p className='text-secondary'>Experienced Senior Java Developer specializing in Spring, Hibernate, and scalable backend solutions for enterprise applications.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow custom-edu-card">
                            <div className="card-body">
                                <h2>Jr. Software Developer</h2>
                                <p><small>at</small> Manasvi.tech</p>
                                <hr />
                                <p className=''>Manasvi Tech Solutions Pvt. Ltd | <small className='text-secondary'>Jun 2024 - Jun 2025</small></p>
                                <p className='text-secondary'>Junior Web Developer skilled in Java, Spring, React.js, and CodeIgniter, passionate about building dynamic websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow custom-edu-card">
                            <div className="card-body mb-4">
                                <h2>Software Developer Intern</h2>
                                <p><small>at</small> EagleByte Solutions</p>
                                <hr />
                                <p className=''>EagleByte Solutions Pvt. Ltd | <small className='text-secondary'>Mar 2024 - May 2025</small></p>
                                <p className='text-secondary'>Web Developer Intern with hands-on experience in Web Technologies, Js, and CodeIgniter, eager to learn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-lg-4">
                    <div className="card shadow custom-edu-card">
                        <div className="card-body">
                            <h2>Web Developer Intern</h2>
                            <p><small>at</small> Passion Software</p>
                            <hr />
                            <p className=''>Passion Software Solutions Pvt. Ltd | <small className='text-secondary'>Jan 2024</small></p>
                            <p className='text-secondary'>Web Developer Intern with hands-on experience in Web Technologies like Html, Css, Js, and PHP.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Education;