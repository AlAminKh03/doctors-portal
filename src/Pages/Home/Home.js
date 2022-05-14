import React from 'react';
import Contact from '../Contact';
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Banner from './Banner/Banner';
import ExtraInfo from './ExtraInfo/ExtraInfo';

import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExtraInfo></ExtraInfo>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;