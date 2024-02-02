import { Chip } from "@nextui-org/react";
import moment from "moment";

//Icon's
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

export default function InvtInfoBasicInfo({inventario}:any){

    return (                        
        <div className="flex flex-col gap-2">
            <Link to={`/almacen/inventarios/${inventario.id}`} target="_blank">
                <h1 className="text-5xl lg:text-4xl font-extrabold">Informacion detallada</h1>
            </Link>
            <p className="text-gray-500">{inventario.id}</p>
            <div className="flex gap-2 mt-1">
                <Chip
                    className="text-sm"
                    color={inventario.estatus ? "primary" : "danger"}
                    startContent={<GoDotFill size={18} />}
                    classNames={{content:"font-bold"}}>
                    {inventario.estatus ? "ACTIVO AL MOMENTO" : `FINALIZADO EN ${moment(inventario.fecha_actualizacion).format("DD/MM/YYYY")}`}
                </Chip>
                <Chip
                    className="text-sm"
                    color={inventario.tipo_inventario === "categoria" ? "success" : "danger"}
                    startContent={<GoDotFill size={18} />}
                    classNames={{content:"font-bold"}}>
                    {inventario.tipo_inventario === "categoria" ? "CATEGORIA" : "PERSONALIZADO"}
                </Chip>
            </div>
        </div>
    );

}