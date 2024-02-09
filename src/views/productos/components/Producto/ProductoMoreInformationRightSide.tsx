import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ProductoMoreInformationRightSide({producto}:any){
    return (
        <div className="productoMoreInformationRightSide">
         <hr/>
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Descripcion" title={<p className="font-bold text-2xl">Descripcion del producto</p>}>
                {producto.descripcion}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Usos" title={<p className="font-bold text-2xl">Usos del producto</p>}>
                {producto.usos.length >= 1 ? producto.usos : "Ningun uso del producto fue registrado..."}
            </AccordionItem>
        </Accordion>
        </div>
    );
}