
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext/AuthContext';

const AddServices = () => {

    const {setTitle} = useContext(UserContext);
    setTitle('Add services');

    return (
        <div>
            add service
        </div>
    );
};

export default AddServices;