import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../Components/Loading/Loading";
import CategoryCard from "./CategoryCard";

const AllCategories = () => {
  const url = "http://localhost:5000/categories";
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
      <h2>All Laptop Brands</h2>
      <div>
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
