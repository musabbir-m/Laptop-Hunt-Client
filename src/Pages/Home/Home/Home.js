import React from 'react';
import Loading from '../../../Components/Loading/Loading';
import AllCategories from '../../Categories/AllCategories/AllCategories';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <h2>
            This is home
          </h2>
          

        </div>

    );
};

export default Home;