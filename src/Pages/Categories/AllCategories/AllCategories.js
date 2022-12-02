import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Components/Loading/Loading";
import CategoryCard from "./CategoryCard";

const AllCategories = () => {
  const url = "https://laptopserver.vercel.app/categories";
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "loaded successfully");
      return data;
    },
  });
  if (categories.length === 0) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-5xl text-center text-orange-600 my-5 ">
        All Laptop Brands
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
