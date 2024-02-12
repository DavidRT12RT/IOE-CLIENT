import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import LeftMenu from "../components/leftMenu/LeftMenu";

//Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlmacenRouter from "./AlmacenRouter";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import PrivateRoute from "./PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../redux/thunks";
import { RootState } from "../redux/store";

export default function AppRouter(){

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
                            	    <BreadcrumbItem>Home</BreadcrumbItem>
                	                <BreadcrumbItem>Productos</BreadcrumbItem>
                	                <BreadcrumbItem><p className="font-bold">405bd12a-08b1-4a02-b92d-5c395f259c3a</p></BreadcrumbItem>
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