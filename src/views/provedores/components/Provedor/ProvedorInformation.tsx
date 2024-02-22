import { Button } from "@nextui-org/react";
import { Provedor } from "../../interfaces/Provedor.interface";
import { useState } from "react";
import CuentasBancarias from "./CuentasBancarias";
import Direcciones from "./Direcciones";

interface ProvedorInformationProps {
    provedor:Provedor
};

enum tabActiveUI {
    CUENTAS_BANCARIAS = "CUENTAS_BANCARIAS",
    DIRECCIONES = "DIRECCIONES"
};

export default function ProvedorInformation({provedor}:ProvedorInformationProps){

    const [ tabActive,setTabActive ] = useState(tabActiveUI.CUENTAS_BANCARIAS);

    return (
        <div className="ProvedorInformation">
            <div className="basicInformation">
                <h2 className="font-extrabold text-7xl">{provedor.nombre} {provedor.alias && <span className="text-sm text-gray-500">({provedor.alias})</span>}</h2>
                <div className="grid grid-cols-2 gap-4 mt-5">
                    <p className="font-bold">Correo:</p>
                    <p className="text-gray-500">{provedor.correo}</p>
                    <p className="font-bold">Telefono:</p>
                    <p className="text-gray-500">{provedor.telefono}</p>
                    <p className="font-bold">RFC:</p>
                    <p className="text-gray-500">{provedor.RFC}</p>
                    <p className="font-bold">Tipo de persona:</p>
                    <p className="text-gray-500">{provedor.tipoDePersona}</p>
                    <p className="font-bold">Condiciones comerciales:</p>
                    <p className="text-gray-500">{provedor.condicionesComerciales}</p>
                    <p className="font-bold">Condiciones de pago:</p>
                    <p className="text-gray-500">{provedor.condicionesPago}</p>
                </div>
            </div>
            <div className="detailInformation">
                <div>
                    <Button onClick={() => setTabActive(tabActiveUI.CUENTAS_BANCARIAS)} color={tabActive === tabActiveUI.CUENTAS_BANCARIAS ? "primary" : "default"} size="lg" style={{borderRadius:"0px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}>Cuentas bancarias</Button>
                    <Button onClick={() => setTabActive(tabActiveUI.DIRECCIONES)} color={tabActive === tabActiveUI.DIRECCIONES ? "primary" : "default"} size="lg" style={{borderRadius:"0px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>Direcciones</Button>
                </div>

                {
                    tabActive === tabActiveUI.CUENTAS_BANCARIAS ? <CuentasBancarias cuentasBancarias={provedor.cuentasBancarias}/> : <Direcciones direcciones={provedor.direcciones}/>

                }

            </div>
        </div>
    );

}