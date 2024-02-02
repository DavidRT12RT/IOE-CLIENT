import { Avatar, Chip } from "@nextui-org/react";

//Icons
import { FaFileAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

//Components
import { InvtArticulos } from "./InvtArticulos";

import moment from "moment";

interface InvtInfoProps{
    inventario:any;
}
import 'moment/locale/es';
import { capitalize } from "../../../../utils";
import { Link } from "react-router-dom";


export const InvtInfo = ({inventario}:InvtInfoProps) => {

    moment.locale("es");

    return (
        <div className="InvtInfo col-span-0 md:col-span-3">
            <div className="flex justify-between">
                {/* BASIC INFORMATION */}
                <div className="flex flex-col gap-2">
                    <Link className="text-4xl font-extrabold" target="_blank" to={`/almacen/inventarios/${inventario.id}`}>
                        {inventario.nombre_inventario}
                    </Link>
                    <p className="text-gray-500">{inventario.id}</p>
                    <div className="flex gap-2">
                        <Chip
                            // style={{padding:"0px"}}
                            className="text-sm mt-1"
                            // variant="light"
                            color={inventario.estatus ? "primary" : "danger"}
                            startContent={<GoDotFill size={18} />}
                            classNames={{content:"font-bold"}}>
                            {inventario.estatus ? "ACTIVO AL MOMENTO" : `FINALIZADO EN ${moment(inventario.fecha_actualizacion).format("DD/MM/YYYY")}`}
                        </Chip>
                        <Chip
                            // style={{padding:"0px"}}
                            className="text-sm mt-1"
                            // variant="light"
                            color={inventario.tipo_inventario === "categoria" ? "primary" : "danger"}
                            startContent={<GoDotFill size={18} />}
                            classNames={{content:"font-bold"}}>
                            {inventario.tipo_inventario === "categoria" ? "CATEGORIA" : "PERSONALIZADO"}
                        </Chip>
                    </div>
                    {/* INFO CARDS */}
                    <div className="mt-4 flex items-center" style={{gap:35}}>
                        <div className="flex gap-3 items-center bg-white p-3 rounded-lg">
                            <FaFileAlt className="text-gray-500 text-xl"/>
                            <div className="info">
                                <h3 className="font-bold text-sm text-gray-500">CREADO</h3>
                                <p>{moment(inventario.fecha_creacion).format("MMMM [de] D [del] YYYY")}</p>
                            </div> 
                        </div>
                        <div className="flex gap-3 items-center bg-white p-3 rounded-lg">
                            <FaFileAlt className="text-gray-500 text-xl"/>
                            <div className="info">
                                <h3 className="font-bold text-sm text-gray-500">ULTI. FECHA ACTUALIZACION</h3>
                                <p>{moment(inventario.fecha_actualizacion).format("mmmm [de] d [del] yyyy")}</p>
                            </div> 
                        </div>
                    </div>
                </div>

                {/* USER THAT MADE THE INVENTORY */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-sm text-gray-500 mt-5">SUPERVISOR</h3>
                    <div className="flex items-center gap-5">
                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                        <p className="text-primary font-bold">{capitalize(inventario.supervisor.nombre)}</p>
                        <Chip
                            className="text-sm"
                            color={inventario.supervisor.activo ? "success" : "danger"}
                            startContent={<GoDotFill size={18} />}
                            classNames={{content:"font-bold"}}>
                            {inventario.supervisor.activo ? "ACTIVO" : `DESACTIVADO`}
                        </Chip>
                    </div>
                    <div className="mt-3 text-gray-500">
                        <p>{inventario.supervisor.correo}</p>
                        <p>{inventario.supervisor.telefono}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <InvtArticulos detalles={inventario?.detalles}/>
            </div>
        </div>
    );

};