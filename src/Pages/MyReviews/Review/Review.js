
import { Avatar, Rating } from 'flowbite-react';
import React from 'react';
import { FaTimes, FaEdit } from "react-icons/fa";

const Review = ({review, deleteReview}) => {

    const {address, feedback, name, photo, serviceName, ratings, _id } = review;




    return (
        <div className='flex mb-8 bg-blue-gray-400 shadow-2xl rounded-xl px-8 py-4 items-center'>
                <div className='w-[40%] flex gap-5'>
                    <div>
                        {
                            photo?
                            <img src={photo} className='rounded-lg' alt="" />
                            :
                            <Avatar />
                        }
                    </div>
                    <div className='text-base'>
                        <p>Service Name: {serviceName}</p>
                        <p>{name}</p>
                        <p>{address}</p>
                        <div className='flex'>Ratings: {ratings} 
                        <Rating>
                        <Rating.Star/>
                        </Rating>
                        </div>
                    </div>
                </div>
                <div className='w-1/2'>
                    <p>{feedback}</p>
                </div>
                <div className='flex gap-5 justify-evenly w-[10%]'>
                    <FaEdit className='text-4xl text-[#0E3D4B]' title='Edit review'></FaEdit>
                    <FaTimes onClick={ () => deleteReview(_id)} className='text-4xl text-[#0E3D4B]' title='Delete review'></FaTimes>
                </div>
            </div>
    );
};

export default Review;