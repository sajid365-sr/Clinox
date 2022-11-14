
import React, { useContext } from 'react';
import { UserContext } from '../../contexts/AuthContext/AuthContext';

const Home = () => {
    const {name} = useContext(UserContext);
    console.log(name)

    return (
        <div>
            <h2>This is home page</h2>
        </div>
    );
};

export default Home;