import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "./authUtils";


export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  if (!isAuthenticated()) {

    // user is not authenticated
    //  navigate("/login")
    return <Navigate to="/login" />;
  }else{
    return children;
  }
 
  
};


export default ProtectedRoute