import InvtProducto from "./InvtProducto";

interface InvtArticulosProps {
    detalles:any;
}

export const InvtArticulos = ({detalles}:InvtArticulosProps) => {

    return (
        <div className="invtInfoArticulos mt-10">
            <div className="text-gray-500 font-bold flex flex-wrap justify-between">
                <h3>Art.</h3>
                <h3>Cantidad contada</h3>
                <h3>Stock</h3>
                <h3>Diferencia</h3>
            </div>
            {detalles.map((detalle:any) => (
                <InvtProducto detalle={detalle} key={detalle.id}/>
            ))}
        </div>
    );

}