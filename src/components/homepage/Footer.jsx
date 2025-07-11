import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="container-fluid mt-5 pt-5">
                <div className="row hero-bg">
                    <div className="col-lg-12 my-5 py-5">
                        <div className="d-flex justify-content-center">
                            <div className="icons">
                                <div className="d-flex justify-content-center mb-4">
                                    {/* <a className="btn btn-light btn-social me-2" href="#">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a className="btn btn-light btn-social me-2" href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a> */}
                                    <a className="btn btn-light btn-social me-2" href="https://linkedin.com/in/udayapatil">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a className="btn btn-light btn-social" href="https://www.instagram.com/theudaypatil?igsh=MTl0dG1oZHVrNWdydA==">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;