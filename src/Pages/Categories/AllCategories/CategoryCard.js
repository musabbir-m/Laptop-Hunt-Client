import React from 'react';
import {  HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';


const CategoryCard = ({category}) => {
    const {brandName, _id}= category
    return (
        <Link to= {`/categories/${brandName}`}>
        <div className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <h2 className=" justify-center text-3xl flex flex-row text-">{brandName} <HiArrowNarrowRight></HiArrowNarrowRight></h2>
        </div>
        </Link>
        
    );
};

export default CategoryCard;