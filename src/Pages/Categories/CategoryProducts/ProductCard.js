import axios from "axios";
import React, { useEffect, useState } from "react";
import BookingModal from "../../BookingModal/BookingModal";
import { HiBadgeCheck } from "react-icons/hi";

const ProductCard = ({ product, setCurrentProduct }) => {
  const [seller, setSellr]= useState([])
const url= `http://localhost:5000/user?email=${product.sellerEmail}`

//Loading Seller Data by Axios
// try{
//   const response= axios.get(url)  
//   console.log(response.data);
//   setSellr(response.data)
// }
// catch(err){
 
// }

useEffect(()=>{
axios.get(url)
.then(res=>{
  setSellr(res.data)
})
}, [])
  const {
    productName,
    description,
    price,
    condition,
    purchaseDate,
    postDate,
    yearsUsed,
    img
  } = product;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="img"/>
        </figure>
        <div className="card-body">
          <h2 className=" bg-secondary text-white text-xl font-bold rounded-2xl text-center">
            {productName}
          </h2>
          <p className="flex">Seller: {seller.name} {seller.verified==="true" && <HiBadgeCheck></HiBadgeCheck>}</p>
          <p>{description}</p>
          <div className="grid grid-cols-2">
            <p>price: $ {price}</p>
            <p>Condition: {condition}</p>

            <p>Product used: {yearsUsed}</p>
          </div>
          <p>Purchase date: {purchaseDate}</p>
          <p>Post date: {postDate}</p>
          
          

          <div className="card-actions justify-center">
            <label
              htmlFor="booking-modal"
              className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={()=>setCurrentProduct(product)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ProductCard;
