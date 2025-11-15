import React from 'react'
import HireMe from './homepage/HireMe';


const Navbar = () => {
    return (
        <div className="container-fluid m-0 p-0" style={{width: '100dvw'}}>
            <nav className="navbar navbar-expand-lg custom-nav-main m-0">
                <div className="row w-100 h-100">
                    <div className="col-lg-12 h-100">
                        <div className="d-flex justify-content-center align-items-center">
                            <ul className='custom-nav-ulist w-100'>
                                <li className=''>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                {/* <li>
                                        <a href="#about">
                                            About
                                        </a>
                                    </li> */}
                                <li>
                                    <a href="#education">
                                        Education
                                    </a>
                                </li>
                                <li>
                                    <a href="#experience">
                                        Experience
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#projects">
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a href="#certification">
                                        Certifications
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#hireMeModal">
                                        Hire Me
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>


                <HireMe />
            </nav>
        </div>
    );
};

export default Navbar;