import { Tab, Tabs } from "@nextui-org/react";


import InvtInfoSupervisor from "./InvtInfoSupervisor";
import InvtInfoBasicInfo from "./InvtInfoBasicInfo";
import InvtInfoDates from "./InvtInfoDates";
import InvtMovimientos from "./InvtMovimientos";
import InvtItemsArtInfo from "./InvtItemsArtInfo";

export default function InvtInfo({inventario}:any){

    return (
        <div className="InvtInfo">

            <div className="flex items-center justify-between">
                <InvtInfoBasicInfo inventario={inventario}/>
                <InvtInfoSupervisor inventario={inventario}/>
            </div>

           <InvtInfoDates inventario={inventario}/> 
           <InvtItemsArtInfo inventario={inventario}/>

            <hr/>
            <Tabs aria-label="Options">
                <Tab key="movimientos" title={<p className="font-bold">Movimientos</p>}>
                    <InvtMovimientos/>
                </Tab>
                <Tab key="estadistica" title={<p className="font-bold">Estadistica</p>}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum perferendis voluptas, inventore accusantium asperiores quas obcaecati numquam esse tempore ullam, maxime praesentium voluptatibus et, cumque impedit pariatur aperiam. Maiores, repellendus.
                </Tab>
            </Tabs>
        </div>
    );

}