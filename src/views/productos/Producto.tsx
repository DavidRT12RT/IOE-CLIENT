
//Component's
import ProductoBasicInformation from "./components/Producto/ProductoBasicInformation";
import ProductoImages from "./components/Producto/ProductoImages";
import ProductoMoreInformationLeftSide from "./components/Producto/ProductoMoreInformationLeftSide";
import ProductoMoreInformationRightSide from "./components/Producto/ProductoMoreInformationRightSide";

import "./assets/Producto.css";

export default function Producto() {

    return (
        <>
            <section className="productoContainer">

                <div className="productoFirtsContent  grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center">
                    <ProductoImages/>
                    <ProductoBasicInformation/>
                </div>

                <div className="productoSecondContent grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
                    <ProductoMoreInformationLeftSide/>
                    <ProductoMoreInformationRightSide/>
                </div>

            </section>
        </>
    );

}