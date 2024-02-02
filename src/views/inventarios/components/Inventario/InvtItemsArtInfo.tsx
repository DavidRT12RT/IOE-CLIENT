import moment from "moment";
import { FaFileAlt } from "react-icons/fa";

export default function InvtItemsArtInfo({inventario}:any){

    return (
        <div className="flex text-start md:items-center flex-col md:flex-row md" style={{gap:15}}>
            <div className="InvtItemsArtInfoCard">
                <FaFileAlt className="text-gray-500 text-xl"/>
                <div className="info">
                    <h3 className="font-bold text-sm text-gray-500">Art.Totales</h3>
                    <p>{inventario.detalles.length}</p>
                </div> 
            </div>

            <div className="InvtItemsArtInfoCard">
                <FaFileAlt className="text-gray-500 text-xl"/>
                    <div className="info">
                        <h3 className="font-bold text-sm text-gray-500">Art.Ajustados</h3>
                        <p>{inventario.articulos_ajustados}</p>
                    </div> 
            </div>

            <div className="InvtItemsArtInfoCard">
                <FaFileAlt className="text-gray-500 text-xl"/>
                    <div className="info">
                        <h3 className="font-bold text-sm text-gray-500">Art.Contados</h3>
                        <p>{inventario.articulos_contados}</p>
                    </div> 
            </div>

            <div className="InvtItemsArtInfoCard">
                <FaFileAlt className="text-gray-500 text-xl"/>
                    <div className="info">
                        <h3 className="font-bold text-sm text-gray-500">Imp.Ajustado</h3>
                        <p className="text-green-500">${inventario.importe_ajustado}</p>
                    </div> 
            </div>

        </div>
    );

}