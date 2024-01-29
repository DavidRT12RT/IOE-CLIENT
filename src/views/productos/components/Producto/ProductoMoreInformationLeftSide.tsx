import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";

export default function ProductoMoreInformationLeftSide(){

    return (
        <div className="productoMoreInformationLeftSide">
            <div>
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

            <div>
                <h2 className="font-bold text-2xl">Movimientos</h2>
                <Tabs aria-label="Movimientos">
                    <Tab key="inventarios" title="Inventarios">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, magnam reiciendis? Soluta sed, esse veniam placeat earum accusantium voluptate labore nemo repellendus cumque, magni quibusdam pariatur, aut delectus corporis velit.</Tab>
                    <Tab key="inventarios" title="Ingresos">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum similique magni repellat delectus, consectetur placeat adipisci ipsa itaque sed sit quia quaerat aliquam facilis mollitia quas, saepe magnam, facere doloremque.</Tab>
                    <Tab key="inventarios" title="Salidas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus quam aliquid accusantium, veritatis reprehenderit quos ipsa non nostrum nam harum impedit dignissimos debitis minima consequatur, consequuntur aperiam! Mollitia, repellendus!</Tab>
                </Tabs>
            </div>

        </div>
    );

}