import { Avatar, Chip } from "@nextui-org/react";

import { GoDotFill } from "react-icons/go";
import { capitalize } from "../../../../utils";

export default function InvtInfoSupervisor({inventario}:any){

    return (
        <div className="flex flex-col gap-2">
            <h3 className="font-bold text-sm text-gray-500">SUPERVISOR</h3>
            <div className="flex items-center gap-4">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                <p className="text-primary font-bold">{capitalize(inventario.supervisor.nombre)}</p>
                {/* <Chip
                    className="text-sm"
                    color={inventario.supervisor.activo ? "success" : "danger"}
                    startContent={<GoDotFill size={18} />}
                    classNames={{content:"font-bold"}}>
                    {inventario.supervisor.activo ? "ACTIVO" : `DESACTIVADO`}
                </Chip> */}
            </div>
            <div className="text-gray-500">
                <p>{inventario.supervisor.correo}</p>
                <p>{inventario.supervisor.telefono}</p>
            </div>
        </div>
    );
}