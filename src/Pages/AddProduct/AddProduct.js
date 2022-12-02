import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const AddProduct = () => {
  const labelClass =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const inputClass =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const { user } = useContext(AuthContext);
  console.log(user);
  const imgbbKey= process.env.REACT_APP_imgbb
  console.log(imgbbKey)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

 
  //   add product
  const addProduct = (data) => {
    console.log(data);
    const image= data.img[0]
    const formData= new FormData()
    formData.append('image', image)
    const url= `https://api.imgbb.com/1/upload?&key=${imgbbKey}`
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res=> res.json())
    .then(imgData=> {
        if (imgData.success){
            console.log(imgData.data.url);
          
            //prouct data
           
            const product= {
                productName: data.name,
                brandName: data.brand,
                price: data.price,
                condition: data.condition,
                purchaseDate: data.purchaseDate,
                postDate: new Date().toJSON().slice(0,10)
                ,
                yearsUsed: data.useDuration,
                location: data.location,
                mobile: data.phone ,
                sellerEmail: user?.email,
                img: imgData.data.url,
                description: data.description,
                advertised: 'false',
                salesStatus: 'unsold'

            }

            console.log(product);
            //post product
            fetch("http://localhost:5000/product", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
            })
        }
    })
  };

  return (
    <div className="mb-10">
      <h2 className="text-4xl  font-bold p3 mb-5 text-center ">
        Add A Product
      </h2>
      <form onSubmit={handleSubmit(addProduct)}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClass}>
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              id=""
              className={inputClass}
              placeholder="product model or name"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="last-name" className={labelClass}>
              Brand
            </label>
            <select className={inputClass} {...register("brand")}>
              <option value="Acer">Acer</option>
              <option value="Asus">Asus</option>
              <option value="HP">HP</option>
            </select>
          </div>
          <div>
            <label htmlFor="price" className={labelClass}>
              Price
            </label>
            <input
              {...register("price")}
              type="text"
              id="price"
              className={inputClass}
              placeholder="price $"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="condition" className={labelClass}>
              Condition
            </label>
            <select className={inputClass} {...register("condition")}>
              <option value="excellent">excellent</option>
              <option value="good">good</option>
              <option value="fair">fair</option>
            </select>
          </div>
          <div>
            <label htmlFor="purchase-date" className={labelClass}>
              Date of Purchase
            </label>
            <input
              {...register("purchaseDate")}
              type="date"
              id="date"
              className={inputClass}
              placeholder="eg: 1-1-2020"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="used" className={labelClass}>
             Total used
            </label>
            <input
              {...register("useDuration")}
              type="text"
              id="useduration"
              className={inputClass}
              placeholder="duration of use (in month)"
              required
            ></input>
          </div>
          
        </div>

        <div>
            <label htmlFor="location" className={labelClass}>
              Location
            </label>
            <input
              {...register("location")}
              type="text"
              id="location"
              className={inputClass}
              placeholder="eg: Dhaka"
              required
            ></input>
          </div>

        <div>
          <label htmlFor="mobile" className={labelClass}>
            Mobile number{" "}
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="tel"
            className={inputClass}
            placeholder="01700000000"
            required
          ></input>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            {...register("email")}
            defaultValue={user?.email}
            type="email"
            id="email"
            className={inputClass}
            placeholder={user?.email}
            disabled
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className={labelClass}>
            Add Photo{" "}
          </label>
          <input
            {...register("img")}
          
            type="file"
            id="img"
            className={inputClass}
          ></input>
        </div>

        <div className="mb-6">
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            placeholder="Product description"
          ></textarea>
        </div>

        <input
           className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
