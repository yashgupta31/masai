import { createContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({});

  const login=(token)=>{
    localStorage.setItem('shopcluestoken', JSON.stringify(token));
    const decodeToken= jwtDecode(token)
    setUserDetail(decodeToken)
  }

  const logout=()=>{
    localStorage.removeItem('shopcluestoken')
    setUserDetail('');
  }

  return (
    <AuthContext.Provider value={{ userDetail, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;


// export const UserContextProvider = ({children})=>{
//     const [currentUser,setCurrentUser] = useState(null)
//     const token =  localStorage.getItem('token')
//     // get current user
// const getUser = async()=>{
//     const getUser =  await instance.get('/current-user',{
//         headers:{
//             Authorization:`Bearer ${token}`
//         }
//     })
//     const user = getUser.data;
//     setCurrentUser(user)
// }
// useEffect(()=>{
//     getUser()
// },[token])


//     return 