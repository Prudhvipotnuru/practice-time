import { Navigate} from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({children}){
    const {isLoggedIn}=useAuth();
    if(!isLoggedIn) <Navigate to="/login" replace/>;
    return children;
}