import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Dashboard = () => {
    const {user}= useContext(AuthContext)
    return (
        <div>
            
           <h2 className='text-5xl'> {user.displayName}</h2>
           <h4 className='mt-5 text-xl text-teal-600'> Select options to see details from sidebar</h4>
        </div>
    );
};

export default Dashboard;