import React from 'react';
import Service from '../Service/Service';
import teeth from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whiting from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='py-10'>
            <div className='py-12 text-center uppercase'>
                <h3 className='text-primary font-bold'>Our Services</h3>
                <h4>Service we provide</h4>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-4'>
                <Service img={teeth} ></Service>
                <Service img={cavity} ></Service>
                <Service img={whiting} ></Service>
            </div>
        </div>
    );
};

export default Services;