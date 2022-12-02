import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
    const products= useLoaderData()
    const [currentProduct, setCurrentProduct]= useState(null)
    console.log(products);
    return (
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-10'>
           {
            products.map(product=>

                <ProductCard
                key={product._id}
                product={product}
                setCurrentProduct= {setCurrentProduct}
                >
                </ProductCard>
            )
           }
           {
            currentProduct &&
 <BookingModal currentProduct= {currentProduct}
 setCurrentProduct= {setCurrentProduct}
 ></BookingModal>

           }
           
        </div>
    );
};

export default CategoryProducts;