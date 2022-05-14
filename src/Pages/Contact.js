import React from 'react';
import img from '../assets/images/appointment.png'

const Contact = () => {

    return (
        <div className="mt-12 " style={{
            background: `url(${img})`
        }}>
            <div className='text-center text-primary mb-5 p-5'>
                <h3 className='text-center '>Contact US</h3>
                <h1 className=' text-white text-xl'>Stay Connected with us</h1>
            </div>

            <div className='flex justify-center'>
                <div className="w-full max-w-xs mt-5 ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">

                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-6">

                            <input className="shadow appearance-none border border-red-500 rounded w-full py-4 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" />

                        </div>
                        <div className="mb-6">

                            <input className="shadow appearance-none border border-red-500 rounded w-full py-8 px-8 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="comment" type="text" placeholder="comment" />

                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Submit
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Contact;