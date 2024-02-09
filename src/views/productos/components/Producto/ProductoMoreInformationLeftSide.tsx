import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";

export default function ProductoMoreInformationLeftSide({producto}:any){
    return (
        <div className="productoMoreInformationLeftSide">
            <div>
                <hr/>
                <Accordion defaultExpandedKeys={["3"]}>
                        <AccordionItem key="1" aria-label="Hoja tecnica" title="Hoja tecnica">
                            {producto.usos.length >= 1 ? producto.usos : "Ningun uso del producto fue registrado..."}
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Hoja de seguridad" title="Hoja de seguridad">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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