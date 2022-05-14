import React from 'react';

const Review = ({ reviews }) => {
    const { name, review, img } = reviews
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum amet soluta impedit obcaecati, saepe architecto?</p>

                <div className='flex items-center'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        {name}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Review;