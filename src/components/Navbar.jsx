import React from 'react'


const Navbar = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <nav className="navbar navbar-expand-lg custom-nav-main m-0">
                    <div className="row w-100 h-100">
                        <div className="col-lg-12 h-100">
                            <div className="d-flex justify-content-center align-items-center">
                                <ul className='custom-nav-ulist'>
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
                                    <li>
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
                                        <a href="https://linkedin.com/in/udayapatil">
                                            Hire Me
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>




                    {/* <a className="navbar-brand" href="#">Portfolio</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div> */}
            </nav>
        </div>
    );
};

export default Navbar;