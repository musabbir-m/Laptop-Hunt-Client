import React from 'react';
import Loading from '../../../Components/Loading/Loading';
import AllCategories from '../../Categories/AllCategories/AllCategories';
import Navbar from '../../Shared/Navbar/Navbar';
import Ads from '../Ads/Ads';
import Banner from '../Banner/Banner';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllCategories></AllCategories>
          <Specialty></Specialty>

          <Ads></Ads>


          
          

        </div>

    );
};

export default Home;