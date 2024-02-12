import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface PublicRouteProps {
    children:React.ReactNode;
};

export default function PublicRoute({children}:PublicRouteProps){

    //HOC que protege rutas publicas
    const { token } = useSelector((store:RootState) => store.auth);

    if(token !== null) return <Navigate to="/almacen/productos"/>;
    else return children;
    
}