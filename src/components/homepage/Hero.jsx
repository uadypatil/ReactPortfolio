import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myPic from '../../assets/mypic.jpg';
import '../../index.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);



    return (
        <div className="container-fluid m-0 hero-container hero-bg hero-height">
            <div className="container pt-5">
                <div className="d-flex hero-container-d-flex mt-5">
                    <div className="text-div w-50 me-5" data-aos="fade-left">
                        <div className="text-danger">
                            <p>GET EVERY SINGLE SOLUTION</p>
                        </div>
                        <div className="headline">
                            <p className='display-2 fw-semibold text-white'>
                                I'm Developer
                            </p>
                            <p className='display-3 fw-semibold text-white'>
                                Uday Patil
                            </p>
                        </div>
                        <div className="discription text-white">
                            A passionate and results-driven software developer with hands-on experience in building robust and scalable web applications. My core expertise lies in Java development with Spring Boot and Hibernate on the backend, complemented by dynamic, interactive frontend interfaces using React.js. I also have strong experience in building fast and efficient web applications using the CodeIgniter PHP framework.
                        </div>
                        <div className="buttons mt-3">
                            <div className="d-flex gap-5">
                                <button className="btn btn-danger">
                                    Get my Resume
                                </button>
                                <a href='https://linkedin.com/in/udayapatil' className="btn btn-light">
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="ms-5 ps-5" data-aos="fade-right">
                        <img src={myPic} alt="" className='img-fluid custom-image ms-5' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;