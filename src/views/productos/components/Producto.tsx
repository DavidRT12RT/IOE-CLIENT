import { Accordion, AccordionItem, BreadcrumbItem, Breadcrumbs, Tab, Tabs } from "@nextui-org/react";
import "../assets/Producto.css";
import ProductoBasicInformation from "./Producto/ProductoBasicInformation";
import ProductoImages from "./Producto/ProductoImages";
import ProductoMoreInformationLeftSide from "./Producto/ProductoMoreInformationLeftSide";
import ProductoMoreInformationRightSide from "./Producto/ProductoMoreInformationRightSide";

export default function Producto() {

    return (
        <>
            <section className="productoContainer">

                <div className="productoFirtsContent  grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center">
                    <ProductoImages/>
                    <ProductoBasicInformation/>
                </div>

                <div className="productoSecondContent grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 place-items-center">
                    <ProductoMoreInformationLeftSide/>
                    <ProductoMoreInformationRightSide/>
                </div>

            </section>
        </>
    );

}