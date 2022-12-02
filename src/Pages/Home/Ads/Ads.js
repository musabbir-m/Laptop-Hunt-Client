import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading/Loading';
import AdCard from './AdCard';

const Ads = () => {

    const url = "http://localhost:5000/ads";
  const { data: ads = [] } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "loaded successfully");
      return data;
    },
  });
  if (ads.length === 0) {
    return <Loading></Loading>;
  }
    return (
        <div>
            <h2 className='text-4xl mt-10 text-center'>Adverstisement</h2>
           <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5 px-5 mx-auto'>
           {
                ads.map(ad=> <AdCard
                key= {ad._id} 
                ad= {ad}
                >

                </AdCard>)
            }
           </div>
        </div>
    );
};

export default Ads;