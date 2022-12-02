import { useEffect, useState } from "react";

const useCheckAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://laptopserver.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdmin, adminLoading];
};

export default useCheckAdmin;
