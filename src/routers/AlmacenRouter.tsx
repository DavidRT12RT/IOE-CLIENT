import { Route, Routes } from "react-router-dom";

import Producto from "../views/productos/Producto";
import RegistrarProducto from "../views/productos/RegistrarProducto";
import Inventarios from "../views/inventarios/Inventarios";

export default function AlmacenRouter(){

    return (
        <Routes>
            <Route path="/producto" element={<Producto/>}></Route>
            <Route path="/producto/registrar" element={<RegistrarProducto/>}></Route>
            <Route path="/inventarios" element={<Inventarios/>}></Route>
        </Routes>
    );

}