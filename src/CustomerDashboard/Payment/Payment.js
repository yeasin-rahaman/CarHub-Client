import React from 'react';
import paymentComingSoon from '../../assets/images/comingsoon.gif'

const Payment = () => {
    return (
        <div className="d-flex my-5 justify-content-center ">
            <div>
                <div className="d-flex my-5 justify-content-center "><h1>Payment Coming soon</h1></div>
                <img className="w-100 img-fluid" src={paymentComingSoon} alt="" />
            </div>
        </div>
    );
};

export default Payment;