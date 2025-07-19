import React from 'react';

function DashContent({ reachesCount, contactsCount, hiringsCount }) {
    return (
        <>
            <div className="row justify-content-around">
                <div className="col-lg-3">
                    <div className="card shadow-sm" data-aos="fade-up">
                        <div className="card-body">
                            <h3 className="text-center">Reaches</h3>
                            <h1 className='text-center fw-bold'>{reachesCount}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card shadow-sm" data-aos="fade-up">
                        <div className="card-body">
                            <h3 className="text-center">Contacts</h3>
                            <h1 className='text-center fw-bold'>{contactsCount}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card shadow-sm" data-aos="fade-up">
                        <div className="card-body">
                            <h3 className="text-center">Hirings</h3>
                            <h1 className='text-center fw-bold'>{hiringsCount}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashContent;
