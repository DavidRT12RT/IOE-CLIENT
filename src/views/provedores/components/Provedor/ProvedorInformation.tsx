import { Provedor } from "../../interfaces/Provedor.interface";

interface ProvedorInformationProps {
    provedor:Provedor
};

export default function ProvedorInformation({provedor}:ProvedorInformationProps){

    return (
        <div className="ProvedorInformation">
            <div className="basicInformation">
                <h2 className="font-extrabold text-7xl">{provedor.nombre} <span className="text-sm text-gray-500">(Han)</span></h2>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure explicabo, dolor voluptates exercitationem doloribus rem aperiam fugit. Praesentium consequatur doloribus cum non autem. Voluptatum aperiam debitis ipsum quisquam maiores.
            </div>
        </div>
    );

}