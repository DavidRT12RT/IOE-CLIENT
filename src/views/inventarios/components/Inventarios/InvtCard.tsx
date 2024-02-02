import { Avatar, Chip } from "@nextui-org/react";
import moment from "moment";
import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import useInventarios from "../../hooks/useInventarios";

interface InvtCardProps {
    inventario:any;
    handleChangeInventarioSelected:(inventario:any) => void
};

export default function InvtCard({inventario,handleChangeInventarioSelected}:InvtCardProps){

    return (
        <div className="invtCardContainer" onClick={() => {handleChangeInventarioSelected(inventario)}}>
            <div className="flex gap-4 items-center">
                {/* <Avatar src={`https://i.pravatar.cc/350?u=a042581f4e29026704${Math.random()}`} size="lg" /> */}
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-xl">{inventario.nombre_inventario}</h3>
                    <Chip
                        // style={{padding:"0px"}}
                        className="mt-1"
                        // variant="light"
                        color={inventario.estatus ? "primary" : "danger"}
                        startContent={<GoDotFill size={18} />}
                        classNames={{content:"font-bold"}}>
                        {inventario.estatus ? "ACTIVO" : `FINALIZADO`}
                    </Chip>
                </div>
            </div>

            <div className="flex gap-5 items-center">
                <div>
                    <p className="font-bold">Art. Ajustados {inventario.articulos_ajustados}</p>
                    <p className="font-bold">Art. Contados {inventario.detalles.length}</p>
                    <p className="font-bold text-sm text-gray-500">Fech. Registro {moment(inventario.fecha_registro).format("DD/MM/YYYY")}</p>
                </div>
            </div>

        </div>
    );

}