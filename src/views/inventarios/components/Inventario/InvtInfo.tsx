import { Tab, Tabs } from "@nextui-org/react";


import InvtInfoSupervisor from "./InvtInfoSupervisor";
import InvtInfoBasicInfo from "./InvtInfoBasicInfo";
import InvtInfoDates from "./InvtInfoDates";
import InvtMovimientos from "./InvtMovimientos";
import InvtItemsArtInfo from "./InvtItemsArtInfo";
import { Inventario } from "../../interfaces/Inventario";

export default function InvtInfo({inventario}:{inventario:Inventario}){

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
                <Tab key="descripcion" title={<p className="font-bold">Descripcion inventario</p>}>
                    {inventario.descripcion}
                </Tab>
            </Tabs>
        </div>
    );

}