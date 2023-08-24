import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/authUtils";
import Loginmt from "./Loginmt";



export const Login = () => {

    const navigate=useNavigate() 

    if (!isAuthenticated()) {
     return <Loginmt />
    }
    else{
        return <Navigate to="/dashboard" />
    }
   
    
  };
export default Login;
