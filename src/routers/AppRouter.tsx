//Routes
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import AlmacenRouter from "./AlmacenRouter";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../redux/thunks";
import { RootState } from "../redux/store";
import LeftMenu from "../components/leftMenu/LeftMenu";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function AppRouter(){

    const currentPath = window.location.pathname;
    let pathArray = currentPath.split('/').filter(Boolean);

    function capitalizeFirstLetter(ruta:string) {
        return ruta.charAt(0).toUpperCase() + ruta.slice(1);
    }


	const dispatch = useDispatch();

	useEffect(() => {
		// @ts-ignore
		dispatch(startChecking());
	},[dispatch]);

    const auth = useSelector((store:RootState) => store.auth);


    if(auth.status == "checking") {
        return <h1>Comprobando token...</h1>
    } 


    return (
        <BrowserRouter>
            <Routes>

                <Route 
                    path="/auth/*"
                    element={
                        <PublicRoute>
                            <AuthRouter/>
                        </PublicRoute>
                    }
                />

                <Route 
                    path="/almacen/*"
                    element={
                        <PrivateRoute>
			                <main className="MainContainer">
				                <LeftMenu/>
				                <div className="MainContent">
                                <Breadcrumbs>
                                    {
                                        pathArray.map((ruta:string) => (
                            	                <BreadcrumbItem key={ruta}>
                                                    <Link to={ruta}>{capitalizeFirstLetter(ruta)}</Link>
                                                </BreadcrumbItem>
                                        ))
                                    }
            	                </Breadcrumbs>
                                <AlmacenRouter/>
				                </div>
			                </main>
                        </PrivateRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}