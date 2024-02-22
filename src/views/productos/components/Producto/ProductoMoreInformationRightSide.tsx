import { Accordion, AccordionItem } from "@nextui-org/react";
import { Producto } from "../../interfaces/Producto";
import ProductoAlmacenTable from "./ProductoAlmacenTable";
import ProductoProvedoresTable from "./ProductoProvedoresTable";

export default function ProductoMoreInformationRightSide({producto}:{producto:Producto}){

    return (
        <div className="productoMoreInformationRightSide">
         <hr/>
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Descripcion" title={<p className="font-bold text-2xl">Descripcion del producto</p>}>
                {producto.descripcion}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Stock" title={<p className="font-bold text-2xl">Stock detallado del producto</p>}>
                <ProductoAlmacenTable producto={producto}/>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Provedores" title={<p className="font-bold text-2xl">Provedores del producto</p>}>
                <ProductoProvedoresTable producto={producto}/>
            </AccordionItem>
        </Accordion>
        </div>
    );
}