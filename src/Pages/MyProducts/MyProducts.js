import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    // const [products, setProducts]= useState([])
    // console.log(products);
    const {user}= useContext(AuthContext)
    const url= `http://localhost:5000/myproducts?email=${user?.email}`

    // useEffect(()=>{
    //     axios.get(url)
    //     .then(res=>{
    //       setProducts(res.data)
    //     })
    //     }, [])

    const {
        data: products = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["myproducts"],
        queryFn: async () => {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data, "loaded successfully");
          return data;
        },
      });  

        const deleteProduct = (product) => {
    
            fetch(`http://localhost:5000/products/${product._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                toast('deleted successfully')
                refetch()
              });
          };

        const advertiseProduct= (product)=> {
            const advertise= {advertised: 'true'}
            fetch(`http://localhost:5000/products/${product._id}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(advertise)
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                toast('Product advertised successfully')
                
              });
          };
        

    return (
        <div>
             <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Take action</th>
                    <th>Take action</th>
                  </tr>
                    
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr key={product._id}>
                      <th>{i + 1}</th>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                      <td>{product.salesStatus}</td>
                      <td>
                        <button
                        onClick={()=>{
                           advertiseProduct(product)
                        }}
                          type="button"
                          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          advertise
                        </button>
                      </td>
                      <td>
                        <button
                        onClick={()=>{deleteProduct(product)}}
                          type="button"
                          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          delete
                        </button>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
        </div>
    );
};

export default MyProducts;