import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import { Producto } from "../../interfaces/Producto";

interface ProductoMoreInformationLeftSideProps{
    producto:Producto
}

export default function ProductoMoreInformationLeftSide({producto}:ProductoMoreInformationLeftSideProps){
    return (
        <div className="productoMoreInformationLeftSide">
            <div>
                <hr/>
                <Accordion defaultExpandedKeys={["1"]}>
                        <AccordionItem key="1" aria-label="Ficha tecnica" title="Ficha tecnica">
                            <div className="grid grid-cols-2 gap-2">
                                <p className="font-bold">Clave SAT:</p><p className="text-gray-500">{producto?.claveSat?.descripcion} <span className="text-gray-500 text-sm">({producto?.claveSat?.clave})</span></p>
                                <p className="font-bold">Unidad medida SAT:</p><p className="text-gray-500">{producto?.unidadMedidaSat?.descripcion} <span className="text-gray-500 text-sm">({producto?.unidadMedidaSat?.unidad})</span></p>

                                <p className="font-bold">Unidad compra:</p><p className="text-gray-500">{producto.unidad_compra}</p>
                                <p className="font-bold">Unidad venta:</p><p className="text-gray-500">{producto.unidad_venta}</p>

                                <p className="font-bold">Metodo reabasto:</p><p className="text-gray-500">{producto.metodo_reabasto}</p>
                                <p className="font-bold">Dias de reabasto:</p><p className="text-gray-500">{producto.dias_reabasto}</p>
                            </div>
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Atributos" title="Atributos">
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Movimientos" title="Movimientos">
                            <Tabs aria-label="Movimientos"> <Tab key="inventarios" title="Inventarios">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magnam reiciendis? Soluta sed, esse veniam placeat earum accusantium voluptate labore nemo repellendus cumque, magni quibusdam pariatur, aut delectus corporis velit.</Tab>
                                <Tab key="ingresos" title="Ingresos">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique magni repellat delectus, consectetur placeat adipisci ipsa itaque sed sit quia quaerat aliquam facilis mollitia quas, saepe magnam, facere doloremque.</Tab>
                                <Tab key="salidas" title="Salidas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus quam aliquid accusantium, veritatis reprehenderit quos ipsa non nostrum nam harum impedit dignissimos debitis minima consequatur, consequuntur aperiam! Mollitia, repellendus!</Tab>
                            </Tabs>
                        </AccordionItem>
                </Accordion>
                <hr/>
            </div>
        </div>
    );

}