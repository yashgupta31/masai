import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import Mens from './Mens'

const MensHome = () => {
 
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/mens');
  }, [navigate]);
  return (
    <></>
  )
}

export default MensHome