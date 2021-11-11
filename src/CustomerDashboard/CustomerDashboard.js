import React, { useState } from 'react';
import MyOrders from './MyOrders/MyOrders';
import CustomerReview from './CustomerReview/CustomerReview';
import Payment from './Payment/Payment';

const CustomerDashboard = () => {

    const [active, setActive] = useState('My orders')

    return (
        <div className="row admin">
            <div className="d-flex flex-column flex-shrink-0 bg-light vh-100 col-md-1 col-3">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('My orders')}><i className="fas fa-cart-arrow-down"></i><small>My Order</small> </li>

                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('Review')}> <i className="fas fa-vote-yea"></i><small>Review</small> </li>

                    <li className="nav-link py-3 border-bottom" onClick={() => setActive('Payment')}> <i class="far fa-money-bill-alt"></i><small>Payment</small> </li>

                </ul>
            </div>
            <div className="col-md-11 col-9" >
                {
                    (active === 'My orders' && <MyOrders></MyOrders>) ||

                    (active === 'Review' && <CustomerReview></CustomerReview>) ||

                    (active === 'Payment' && <Payment></Payment>)
                }
            </div>
        </div>
    );
};

export default CustomerDashboard;