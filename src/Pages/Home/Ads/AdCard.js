import React from "react";

const AdCard = ({ad}) => {
  return (
    <div>
      <div className="card w-96 bg-base-  image-full">
        <figure>
          <img src={ad.img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ad.productName}</h2>
          
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
