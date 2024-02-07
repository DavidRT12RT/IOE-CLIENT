
//Component's
import ProductoBasicInformation from "./components/Producto/ProductoBasicInformation";
import ProductoImages from "./components/Producto/ProductoImages";
import ProductoMoreInformationLeftSide from "./components/Producto/ProductoMoreInformationLeftSide";
import ProductoMoreInformationRightSide from "./components/Producto/ProductoMoreInformationRightSide";

//Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useProducto } from "./hooks/useProducto";

import "./assets/Producto.css";

export default function Producto() {

    const { id } = useParams();
    const navigate = useNavigate();


    const {
        producto,
        isLoadingDataProducto,
        errorDataProducto
    } = useProducto(id);


    console.log(producto);
    if(isLoadingDataProducto) return <h1>Cargando informacion del producto...</h1>
    if(errorDataProducto) return navigate(-1);

    return (
        <>
            <section className="productoContainer">

                <div className="productoFirtsContent  grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center">
                    <ProductoImages/>
                    <ProductoBasicInformation producto={producto}/>
                </div>

                <div className="productoSecondContent grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
                    <ProductoMoreInformationLeftSide/>
                    <ProductoMoreInformationRightSide/>
                </div>

            </section>
        </>
    );

}