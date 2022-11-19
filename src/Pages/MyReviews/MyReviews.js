
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext/AuthContext';

const MyReviews = () => {
    const {setTitle} = useContext(UserContext);
    setTitle('My reviews')

    return (
        <div>
            my Reviews
        </div>
    );
};

export default MyReviews;