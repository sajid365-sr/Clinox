
import { Avatar, Rating } from 'flowbite-react';
import React from 'react';
import { FaTimes, FaEdit, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Review = ({review, deleteReview }) => {

    const {address, feedback, name, photo, serviceName, ratings, _id } = review;
    const location = useLocation();

    return (
        <div className='flex lg:flex-row flex-col mb-8 bg-blue-gray-200 shadow-2xl rounded-xl px-8 py-4 items-center'>
                <div className='lg:w-[40%] w-full items-center flex lg:flex-row flex-col gap-5'>
                    <div>
                        {
                            photo?
                            <img src={photo} className='rounded-lg' alt="" />
                            :
                            <Avatar />
                        }
                    </div>
                    <div className='text-base text-center lg:text-left'>
                        <p>Service Name: {serviceName}</p>
                        <p>{name}</p>
                        <p>{address}</p>
                        <div className='flex justify-center lg:justify-start'>
                            <p>Ratings: {ratings}</p> 
                        <Rating>
                        <Rating.Star/>
                        </Rating>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex justify-center gap-1 text-center my-5 lg:m-0'>
                    <sup className='text-orange-600 text-xs'><FaQuoteLeft/></sup>
                    <p>{feedback}</p>
                    <sub className='text-orange-600 text-xs'><FaQuoteRight/></sub>
                </div>
                <div className='flex gap-5 justify-evenly lg:w-[10%]'>
                    <Link to={`/editReview/${_id}`} state={{from:location}} replace>
                    <FaEdit  className='lg:text-4xl text-2xl text-[#0E3D4B]' title='Edit review'></FaEdit>
                    </Link>

                    <FaTimes onClick={ () => deleteReview(_id)} className='lg:text-4xl text-2xl text-[#0E3D4B]' title='Delete review'></FaTimes>
                </div>
                

            </div>
    );
};

export default Review;