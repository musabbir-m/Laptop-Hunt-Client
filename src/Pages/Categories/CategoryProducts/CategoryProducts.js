import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryProducts = () => {
    const products= useLoaderData()
    console.log(products);
    return (
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto px-10'>
           {
            products.map(product=>

                <ProductCard
                key={product._id}
                product={product}
                >
                </ProductCard>
            )
           }
        </div>
    );
};

export default CategoryProducts;