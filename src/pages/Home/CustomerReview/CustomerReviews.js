import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CustomerReviews.css'


const CustomerReviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://secure-coast-41570.herokuapp.com/review`)
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div className="">


            <div className="d-flex my-5 justify-content-center "><h1>customer reviews</h1></div>
            <Carousel>
                {
                    reviews?.map(
                        review =>
                            <Carousel.Item key={review._id}>

                                <div className="d-flex justify-content-center text-center review-slider">
                                    <div>
                                        <h3 className="color-white">{review?.name}</h3>
                                        {review?.review}
                                    </div>
                                </div>

                            </Carousel.Item>
                    )
                }

            </Carousel>




        </div>
    );
};

export default CustomerReviews;