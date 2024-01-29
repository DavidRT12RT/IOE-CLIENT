import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children:React.ReactNode
};

export default function PublicRoute({children}:PublicRouteProps){
    //HOC que protege rutas publicas

    const token = null;

    if(token === null) return children
    else return <Navigate to="/"/>
    
}