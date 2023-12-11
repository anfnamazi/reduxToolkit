import { FC } from "react";
import { Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    
}
 
const ProtectedRoute: FC<ProtectedRouteProps> = () => {
    return ( <div>protect<Outlet /></div> );
}
 
export default ProtectedRoute;