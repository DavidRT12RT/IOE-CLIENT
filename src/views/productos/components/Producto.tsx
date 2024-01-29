import { Accordion, AccordionItem, BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import "../assets/Producto.css";

export default function Producto() {

    return (
        <>

            <section className="productoContainer">

                <section className="productoFirtsContent">
                    <div className="productoImages">
                        <img src="https://repositoriomdm.blob.core.windows.net/b2c/product-shots/20Dscto/19A0427700-500.png"/>
                    </div>
                    <div className="productoBasicInformation">
                        <h1 className="text-3xl lg:text-6xl font-extrabold font-playfair">Vinimex® Antibacterial 4 Litros</h1>
                        {/* <p className="text-5xl">$3400</p> */}
                        <div className="grid grid-cols-2 gap-4">
                            <p className="font-bold">Material:</p><p className="text-gray-500">Petroleo</p>
                            <p className="font-bold">Color:</p><p className="text-gray-500">Blanco</p>
                            <p className="font-bold">Stock:</p><p className="text-gray-500">400</p>
                            <p className="font-bold">Categoria:</p><p className="text-gray-500">Vinilos</p>
                            <p className="font-bold">Almacen:</p><p className="text-gray-500">0001</p>
                        </div>
                        <p className="text-gray-500 text-sm text-center">Para mas informacion acerca del producto contactar al encagado de almacen</p>
                    </div>
                </section>

                <section className="productoSecondContent grid grid-cols-2 gap-20 mt-5">
                    <div className="productoMoreInformationLeftSide">
                        <hr/>
                        <Accordion>
                                <AccordionItem key="1" aria-label="Carta Tecnica" title="Carta Tecnica">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Hoja de seguridad" title="Hoja de seguridad">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </AccordionItem>
                        </Accordion>
                        <hr/>
                    </div>

                    <div className="productoMoreInformationRightSide">
                        <hr/>

                        <Accordion defaultExpandedKeys={["1"]}>
                                <AccordionItem key="1" aria-label="Carta Tecnica" title={<p className="font-bold text-2xl">Descripcion del producto</p>}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro quasi nobis qui ab incidunt quas atque eligendi reprehenderit saepe distinctio doloremque expedita ducimus nulla, repellendus odio sed sint deserunt?
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Hoja de seguridad" title={<p className="font-bold text-2xl">Usos del producto</p>}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                </AccordionItem>
                        </Accordion>
                    </div>

                </section>
            </section>
        </>
    );

}