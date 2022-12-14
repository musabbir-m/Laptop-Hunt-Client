import React, { useEffect, useState } from "react";

const useCheckSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://laptopserver.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setSellerLoading(false);
        });
    }
  }, [email]);

  return [isSeller, sellerLoading];
};

export default useCheckSeller;
