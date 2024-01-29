import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import Producto from "../views/productos/components/Producto";
import AlmacenRouter from "./AlmacenRouter";
import NavbarMenu from "../components/navbar/Navbar";
import LeftMenu from "../components/leftMenu/LeftMenu";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function AppRouter(){

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
                        <PublicRoute>
			                <nav><NavbarMenu/></nav>
			                <main className="MainContainer">
				                {/* <LeftMenu/> */}
				                <div className="MainContent">
                                <Breadcrumbs>
                            	    <BreadcrumbItem>Home</BreadcrumbItem>
                	                <BreadcrumbItem>Productos</BreadcrumbItem>
                	                <BreadcrumbItem><p className="font-bold">406bd12a-08b1-4a02-b92d-5c395f259c3a</p></BreadcrumbItem>
            	                </Breadcrumbs>
                                <AlmacenRouter/>
				                </div>
			                </main>
                        </PublicRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );

}