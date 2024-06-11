    
    import { Navigate } from "react-router-dom";
    const PrivateRoute = ({children}) => {
       
        const token=localStorage.getItem("token")
         if(!token){
            alert("You are not login")
       return   <Navigate to={"/login"} />
            
           
         }
         return children ;   
    }
    export default PrivateRoute
  