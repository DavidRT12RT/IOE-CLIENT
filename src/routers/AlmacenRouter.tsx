import { Route, Routes } from "react-router-dom";

//Views
import Producto from "../views/productos/Producto";
import RegistrarProducto from "../views/productos/RegistrarProducto";
import Inventarios from "../views/inventarios/Inventarios";
import Inventario from "../views/inventarios/Inventario";
import RegistrarInventario from "../views/inventarios/RegistrarInventario";
import Productos from "../views/productos/Productos";
import RegistrarProvedor from "../views/provedores/RegistrarProvedor";
import Provedor from "../views/provedores/Provedor";
import Provedores from "../views/provedores/Provedores";
import Categorias from "../views/categorias/Categorias";
import { CategoriasProvider } from "../views/categorias/context/CategoriasProvider";

export default function AlmacenRouter(){

    return (
        <Routes>
            <Route path="/productos" element={<Productos/>}></Route>
            <Route path="/provedores" element={<Provedores/>}></Route>
            {/*//@ts-ignore*/}
            <Route path="/productos/:id" element={<Producto/>}></Route>
            <Route path="/productos/registrar" element={<RegistrarProducto/>}></Route>
            <Route path="/provedores/registrar" element={<RegistrarProvedor/>}></Route>
            <Route path="/provedores/:id" element={<Provedor/>}></Route>
            <Route path="/inventarios" element={<Inventarios/>}></Route>
            <Route path="/inventarios/:id" element={<Inventario/>}></Route>
            <Route path="/inventarios/registrar" element={<RegistrarInventario/>}></Route>
            <Route path="/categorias" element={
                <CategoriasProvider>
                    <Categorias/>
                </CategoriasProvider>
            }></Route>
        </Routes>
    );

}