import { Route, Routes } from "react-router-dom";

//Views
import Producto from "../views/productos/Producto";
import RegistrarProducto from "../views/productos/RegistrarProducto";
import Inventarios from "../views/inventarios/Inventarios";
import Inventario from "../views/inventarios/Inventario";
import RegistrarInventario from "../views/inventarios/RegistrarInventario";
import Productos from "../views/productos/Productos";

export default function AlmacenRouter(){

    return (
        <Routes>
            <Route path="/productos" element={<Productos/>}></Route>
            {/*//@ts-ignore*/}
            <Route path="/producto/:id" element={<Producto/>}></Route>
            <Route path="/producto/registrar" element={<RegistrarProducto/>}></Route>
            <Route path="/inventarios" element={<Inventarios/>}></Route>
            <Route path="/inventarios/:id" element={<Inventario/>}></Route>
            <Route path="/inventarios/registrar" element={<RegistrarInventario/>}></Route>
        </Routes>
    );

}