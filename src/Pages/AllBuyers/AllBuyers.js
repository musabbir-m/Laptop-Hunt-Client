import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
  const url = "https://laptopserver.vercel.app/buyers";
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "loaded successfully");
      return data;
    },
  });

  const deleteBuyer = (buyer) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (proceed) {
      fetch(`https://laptopserver.vercel.app/buyers/${buyer._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };
  if (isLoading) {
    return <isLoading></isLoading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Take action</th>
          </tr>
        </thead>
        <tbody>
          {buyers.map((buyer, i) => (
            <tr key={buyer._id}>
              <th>{i + 1}</th>
              <td>{buyer.name}</td>
              <td>{buyer.email}</td>
              <td>
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Verify
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    deleteBuyer(buyer);
                  }}
                  type="button"
                  class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
