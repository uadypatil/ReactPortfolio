import React, { useEffect, useState } from 'react';
import { motion } from "motion/react"
import myPic from '../../assets/mewithnature.jpg';

const AboutUs = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTextHover, setIsTextHover] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target;
            if (target.closest('.hover-text')) {
                setIsTextHover(true);
            } else {
                setIsTextHover(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);


    return (
        <div>

            <div
                className={`cursor-dot ${isTextHover ? 'cursor-line' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            {!isTextHover && (
                <>
                    <div
                        className="cursor-ring"
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    />
                    <div
                        className="cursor-ring2"
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    />
                    <div
                        className="cursor-ring3"
                        style={{ left: `${position.x}px`, top: `${position.y}px` }}
                    />
                </>
            )}
            {/* CUSTOMIZED CURSOR ENDS */}


            <div className="hero-aboutus-container">
                <div className="container mt-5 pt-5" id='about'>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-div custom-image-about-wrapper" data-aos="zoom-in">
                                <img src={myPic} alt="" className='img-fluisd custom-image-about ms-5'  data-aos="zoom-in"/>
                            </div>
                        </div>
                        <div className="col-lg-6 text-start" style={{ zIndex: 2 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="display-4 fw-semibold" >
                                    About Me
                                </h1>
                            </motion.div>

                            <div className="d-flex mt-5">
                                <div className="timeline-container">
                                    <div className="circle blue"></div>
                                    <div className="line"></div>
                                    <div className="circle purple"></div>
                                    <div className="line"></div>
                                    <div className="circle red"></div>
                                </div>

                                <div className="content ps-5">
                                    <div className="row">
                                        <div className="col-lg-12 mb-3" data-aos="zoom-in">
                                            <div className="d-flex justify-content-between">
                                                <h3 className='fw-normal'>Sr Software Developer</h3>
                                                <p className="text-secondary text-bottom"><small>jun-2025 - till now</small></p>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ea aut architecto quam asperiores nisi provident rem voluptatibus aliquid molestiae?
                                            </p>
                                        </div>

                                        <div className="col-lg-12 mb-3" data-aos="zoom-in">
                                            <div className="d-flex justify-content-between">
                                                <h3 className='fw-normal'>Jr Software Developer</h3>
                                                <p className="text-secondary text-bottom"><small>jun-2024 - jun-2025</small></p>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ea aut architecto quam asperiores nisi provident rem voluptatibus aliquid molestiae?
                                            </p>
                                        </div>

                                        <div className="col-lg-12" data-aos="zoom-in">
                                            <div className="d-flex justify-content-between">
                                                <h3 className='fw-normal'>Web Developer Intern</h3>
                                                <p className="text-secondary text-bottom"><small>mar-2024 - jun-2024</small></p>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, ea aut architecto quam asperiores nisi provident rem voluptatibus aliquid molestiae?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer-animated-line"></div>
            </div>
        </div>
    )
}

export default AboutUs;