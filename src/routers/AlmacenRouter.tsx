import { Route, Routes } from "react-router-dom";

import Producto from "../views/productos/components/Producto";
import RegistrarProducto from "../views/productos/RegistrarProducto";

export default function AlmacenRouter(){

    return (
        <Routes>
            <Route path="/producto" element={<Producto/>}></Route>
            <Route path="/producto/registrar" element={<RegistrarProducto/>}></Route>
        </Routes>
    );

}