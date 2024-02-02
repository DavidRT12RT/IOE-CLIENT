import { Avatar } from "@nextui-org/react";
import moment from "moment";

interface InvtProductoProps{
    detalle:any;
};

export default function InvtProducto({detalle}:InvtProductoProps){

    moment.locale("es");

    const handleFormatDate = (date:string) => {
        return moment(date).format("MMMM [de] D [del] YYYY HH:mm:ss")
    }

    return (
        <div className="invtDetalleProductoContainer">

            <div className="flex flex-col">
                <Avatar size="md" src=""/>
                <h3 className="font-bold text-xl">{detalle.producto.nombre}</h3>
                <p className="text-gray-500">SKU: {detalle.producto.id.slice(0,10)}</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="font-bold text-lg">{detalle.cantidad_contada}</p>
                <p className="text-gray-500 text-sm">{handleFormatDate(detalle.fecha_captura)}</p>
            </div>

            <div className="flex flex-col items-center">
                <p className="font-bold text-lg">{detalle.producto.stock}</p>
                <p className="text-gray-500 text-sm">{handleFormatDate(detalle.producto.fecha_actualizacion)}</p>
            </div>

            <p className="font-bold text-2xl">{detalle.cantidad_contada - detalle.producto.stock}</p>

        </div>
    );
}