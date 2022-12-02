import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const BookingModal = ({currentProduct, setCurrentProduct}) => {
  const {user}= useContext(AuthContext)
  const confirmBooking= event=> {

    event.preventDefault()
    const form= event.target 
    const product= currentProduct.productName 
    const price= currentProduct.price 
    const phone= form.phone.value 
    const email= user?.email
    const buyerName= user?.displayName
    const location= form.location.value 
    
    const booking= {
      product, price, phone, email, buyerName, location 
    }

    //post booking

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking)
    })
    .then(res=> res.json())
    .then(data=> {
      console.log( data)
      if(data.acknowledged){
        alert('successfully booked')
        setCurrentProduct(null)
      }
    })

  }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal max-w-sm lg:max-w-full">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle border-none absolute  right-2 top-2 "
            >
              ✕
            </label>
           
  
            <form onSubmit={confirmBooking}
              className="grid grid-cols-1 gap-3 mt-6"
            >
              <h4 className='text-center'> Product: {currentProduct.productName}</h4>
            
  
             
              <input
                type="text"
                name="name"
                placeholder={`Price: ${currentProduct.price}`}
                disabled
                value= {currentProduct.price}
                className="input mt-2 input-bordered  w-full"
                
              />
              <input
                type="text"
                name="userName"
                placeholder= {`${user?.displayName}`}
                className="input mt-2 input-bordered w-full"
                disabled
              />
              <input
                type="email"
                name="email"
                placeholder= {`${user?.email}`}
                className="input mt-2 input-bordered w-full"
                disabled
              />
              <input
                type="text"
                name="phone"
                placeholder= 'Phone number'
                className="input mt-2 input-bordered w-full"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Meeting Loacation"
                className="input mt-2 input-bordered w-full"
              />
  
              <button className="btn bg-[#FF9119] hover:bg-[#FF9119]/80 border-none">Submit</button>
            </form>
          </div>
        </div>
      </>
    );
};

export default BookingModal;