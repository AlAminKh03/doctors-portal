import React from 'react';
import care from '../../../assets/images/treatment.png'

const ExtraInfo = () => {
    return (
        <div className="hero min-h-screen bg-white ">
            <div className="hero-content flex-col lg:flex-row w-50 pl-28">
                <img src={care} className="max-w-sm w-[250px] rounded-lg shadow-2xl " />
                <div className=' p-10 pl-28'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExtraInfo;