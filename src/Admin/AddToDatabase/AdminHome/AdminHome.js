import React from 'react';

import adminImg from './../../../assets/adminpanel.webp'
const AdminHome = () => {
    return (
        <div className="container mt-5">

            <div className="d-flex justify-content-center">
                <div>
                    <div className=" d-flex  justify-content-center mt-5" >
                        <h1>Welcome TO Admin Panel</h1>
                    </div>
                    <div className="  d-flex  justify-content-center mt-5">
                        <img className="img-fluid" src={adminImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;