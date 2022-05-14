import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-8'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl'>Manke an Appointment today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, rem. Perferendis qui perspiciatis at blanditiis optio ab aperiam ipsa earum molestias facilis maxime consectetur eius possimus sed, cum sit nobis.</p>
                <button className="btn btn-primary uppercase text-white bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default MakeAppointment;