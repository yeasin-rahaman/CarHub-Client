import React from 'react';
import Guide from '../Guide/Guide';
import HomeServices from '../HomeServices/HomeServices';
import OurGuides from '../OurGuides/OurGuides';
import GetInTouch from '../GetInTouch/GetInTouch';
import CustomerReviews from '../CustomerReview/CustomerReviews';
import HeroSection from '../../HeroSection/HeroSection';


const Home = () => {
    return (
        <div id="home">

            <HeroSection></HeroSection>
            <HomeServices></HomeServices>
            <CustomerReviews></CustomerReviews>
            <Guide></Guide>
            <OurGuides></OurGuides>
            <GetInTouch></GetInTouch>


        </div>
    );
};

export default Home;