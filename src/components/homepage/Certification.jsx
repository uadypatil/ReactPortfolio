import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import cert1 from '../../assets/rest_api_certificate.pdf';

const Certification = () => {
    return (
        <div className="container-fluid m-0 hero-container h-auto" id='certification'>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='text-center text-headline fw-bold mb-5'  data-aos="fade-right">Certifications</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <iframe src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/133283466" frameBorder="0" className='certification-image' data-aos="fade-right"></iframe>
                        {/* <img src={cert1} alt="" className='img-fluid certification-image' /> */}
                    </div>

                    <div className="col-6" data-aos="fade-left">
                        <p>✨ Exciting News! ✨</p>
                        <p>
                            I’m happy to share that I’ve obtained a new certification: Helping Customers Find You from Skillsoft! 🚀
                            In today’s digital world, visibility is key, and this course has deepened my understanding of strategies to ensure businesses reach the right audience effectively. From SEO techniques to customer engagement, I’ve gained valuable insights that will enhance my approach to digital presence and marketing.
                        </p>
                        <p>
                            <a
                                href="https://www.linkedin.com/posts/udayapatil_learning-certification-skillsoft-activity-7301210233542950912-QA_9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjzSFYBjXpsXAyEm568YWJplvrr4NyovN0"
                                className='read-more-btn mt-5'>
                                Read More
                            </a>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6" data-aos="fade-right">
                        <p>✨ Exciting News! ✨</p>
                        <p>
                            I’m happy to share that I’ve obtained a new certification: REST API: Architecture & Databases Deployment from Skillsoft!
                            This certification has strengthened my understanding of RESTful architecture, API development, database design, and deployment strategies. I’m excited to apply these insights to build scalable, efficient, and maintainable applications.
                            Looking forward to leveraging these skills in upcoming projects! 🚀
                        </p>
                        <p>
                            <a
                                href="https://www.linkedin.com/posts/udayapatil_restapi-certification-apidevelopment-activity-7301212348243972096-bGsS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADjzSFYBjXpsXAyEm568YWJplvrr4NyovN0"
                                className='read-more-btn mt-5'>
                                Read More
                            </a>
                        </p>
                    </div>

                    <div className="col-6"  data-aos="fade-left">
                        {/* <iframe src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/133283466" frameborder="0" className='certification-image'></iframe> */}
                        {/* <img src={cert1} alt="" className='img-fluid certification-image' /> */}
                        <iframe src={cert1} frameBorder="0" className="certification-image h-100"></iframe>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Certification;