import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import { AuthContext } from '../../Context/AuthProvider';
import useCheckSeller from '../../hooks/useCheckSeller';

const SellerRoute = ({children}) => {

    const {user, loading}= useContext(AuthContext)
   const [isSeller, sellerLoading]= useCheckSeller(user?.email)
    const location= useLocation()
    if (loading || sellerLoading) {
        return <Loading></Loading>
      }
    
      if (user && isSeller) {
        return children;
      }
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    };
   

export default SellerRoute;