import React from 'react';
import OurGuide1 from './../../../assets/images/OurGuide(1).jpg'
import OurGuide2 from './../../../assets/images/OurGuide(2).jpg'
import OurGuide3 from './../../../assets/images/OurGuide(3).jpg'
import OurGuide4 from './../../../assets/images/OurGuide(4).jpg'

const ExpertTeam = () => {
    return (
        <div className='container py-5'>
            <div className="text-center py-5">
                <h1 style={{ fontSize: "60px" }}>Our Expert Team</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurGuide1} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">BEATRICE PRIOR</h5>
                            <p className="card-text">Engin Expert</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurGuide2} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">EDWARD DUGHLAS</h5>
                            <p className="card-text">Design Expert</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurGuide3} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PETER PARKER</h5>
                            <p className="card-text">Technical Expert</p>
                        </div>

                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 hover">
                        <img src={OurGuide4} className="card-img-top img-fluid img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LIZA THOMAS</h5>
                            <p className="card-text">Business Expert</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExpertTeam;