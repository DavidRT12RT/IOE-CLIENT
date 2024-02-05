import moment from "moment";
import { FaFileAlt } from "react-icons/fa";

export default function InvtInfoDates({inventario}:any){
    return (                    
        <div className="mt-4 flex items-center" style={{gap:15}}>
            <div className="flex gap-3 items-center bg-white p-3 rounded-lg">
                <FaFileAlt className="text-gray-500 text-xl"/>
                <div className="info">
                    <h3 className="font-bold text-sm text-gray-500">CREADO</h3>
                    <p>{moment(inventario.fecha_creacion).format("DD/MM/YYYY HH:MM:SS")}</p>
                </div> 
            </div>
            <div className="flex gap-3 items-center bg-white p-3 rounded-lg">
                <FaFileAlt className="text-gray-500 text-xl"/>
                    <div className="info">
                        <h3 className="font-bold text-sm text-gray-500">ULTI. FECHA ACTUALIZACION</h3>
                        <p>{moment(inventario.fecha_actualizacion).format("DD/MM/YYYY HH:MM:SS")}</p>
                    </div> 
            </div>
        </div>
    );
}