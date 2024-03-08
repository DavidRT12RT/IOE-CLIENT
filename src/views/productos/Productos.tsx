
import { Pagination } from "@nextui-org/react";


//Component's
import Finder from "./components/Productos/Finder";
import Categorys from "./components/Productos/Categorys";
import ProductoCard from "./components/Productos/ProductoCard";
import TableProductos, { SelectionMode } from "./components/Productos/TableProductos";


import { Producto } from "./interfaces/Producto";
import useProductos from "./hooks/useProductos";

import "./assets/Productos.css";

export default function Productos(){

    const {
        productos,
        isLoadingProductos,
        errorProductos,

        typeOfVisible,
        setTypeOfVisible
    } = useProductos();

    if(isLoadingProductos) return <h1>Cargando informacion de productos</h1>
    if(errorProductos) return <h1>Error al cargar informacion de los productos</h1>
    return (
        <section className="productosContainer">

            <div className="productsFirtsSection">
                <Finder/>
                <Categorys typeOfVisible={typeOfVisible} setTypeOfVisible={setTypeOfVisible}/>
            </div>

            {typeOfVisible !== "table" && <p className="text-gray-500">Mostrando {productos.length} productos</p>}

            <div className="productsSection">
                {
                    typeOfVisible === "table" 
                    ? 
                        <TableProductos productos={productos} selectionMode={SelectionMode.multiple}/>
                    :
                        (
                            productos.map((producto:Producto) => (
                                <ProductoCard producto={producto} key={producto.id}/>
                            ))
                        )
                }
            </div>

            {
                typeOfVisible !== "table" &&             
                (
                    <div className="showResultsSection">
                     <label className="flex items-center text-default-400 text-small">
                            Productos por pagina
                            <select
                                className="bg-transparent outline-none text-default-400 text-small ms-5"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </label>
                    <Pagination showControls total={5} initialPage={1} />
                    </div>
                )
            }

        </section>
    );

}