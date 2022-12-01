import React from 'react';

const ProductCard = ({product}) => {
    const {productName, description, price, condition, purchaseDate, postDate, yearsUsed,}= product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className=" bg-secondary text-white text-xl font-bold rounded-2xl text-center">
           {productName}
          </h2>
          <p>{description}</p>
          <div className='grid grid-cols-2'>
            <p>price: $ {price}</p>
            <p>Condition: {condition}</p>
            
            <p>Product used: {yearsUsed}</p>
            
             
          </div>
          <p>Purchase date: {purchaseDate}</p>
          <p>Post date: {postDate}</p>
          <div className="card-actions justify-end">
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Book Now</button>

          </div>
        </div>
      </div>
    );
};

export default ProductCard;