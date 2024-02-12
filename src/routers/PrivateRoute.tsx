import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
    children:React.ReactNode;
};

export default function PrivateRoute({children}:PrivateRouteProps){

    const { token } = useSelector((store:RootState) => store.auth);

    // if(token === null) return <Navigate to="/auth/login"/>
    // else return children

    return children;

}