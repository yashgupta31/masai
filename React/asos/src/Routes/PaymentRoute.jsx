import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const PaymentRoute = ({children}) => {
    // let navigate= useNavigate()
    let loginArr= JSON.parse(localStorage.getItem('asos-login'))||[];
    console.log(loginArr)
  return loginArr.length==1? children:  <Navigate to="/login" />
}
export default PaymentRoute;
