import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')} </h2>
            <h1>Service:{services.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service => <Service
                    key={service.key}
                    service={service}
                >

                </Service>)}
            </div>
        </div>
    );
};

export default AvailableAppointments;