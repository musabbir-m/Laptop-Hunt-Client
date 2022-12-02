import React from 'react';

const Banner = () => {
    return (
       
        <div className="hero relative min-h-screen " style={{ backgroundImage: `url("https://i.ibb.co/1dFy1Pd/lapto-Banner-Mac.jpghttps://i.ibb.co/1dFy1Pd/lapto-Banner-Mac.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To LaptopHunt</h1>
      <p className="mb-5">The best platfrom to sell and Buy laptops. Pick your budget laptops from our massive laptops collections</p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;