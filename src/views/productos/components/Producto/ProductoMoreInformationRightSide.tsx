import { Accordion, AccordionItem } from "@nextui-org/react";

export default function ProductoMoreInformationRightSide(){
    return (
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
    );
}