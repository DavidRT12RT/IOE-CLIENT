import moment from "moment";
import { Producto } from "../../interfaces/Producto";


interface ProductoBasicInformationProps {
    producto:Producto,
    isEditing:boolean
};

export default function ProductoBasicInformation({producto,isEditing}:ProductoBasicInformationProps){

    let costoPromedio = 0;

    for(const provedorProducto of producto.provedorProductos){
        costoPromedio += provedorProducto.costo;
    }

    if(costoPromedio > 0 ) costoPromedio = parseFloat((costoPromedio / producto.provedorProductos.length).toFixed(2));

    return (                    
        <div className="productoBasicInformation">
            {
                isEditing 
                    ? 
                    <input 
                        name="nombre"
                        className="text-center font-extrabold text-5xl lg:text-6xl w-100"
                        defaultValue={producto.nombre}
                    />
                    :
                    <h1 className="text-5xl lg:text-6xl font-extrabold text-center">{producto?.nombre}</h1>
            }
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-500">{producto.id}</p>
                <p className="text-gray-500 text-sm">SKU: {producto.SKU}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5 px-6">
                <p className="font-bold">Stock total:</p><p className="text-gray-500">{producto.stock}</p>
                <p className="font-bold">Stock minimo:</p><p className="text-gray-500">{producto.stock_minimo}</p>
                <p className="font-bold">Costo promedio:</p><p className="text-gray-500">${costoPromedio}</p>
                <p className="font-bold">Categoria:</p><p className="text-gray-500">{producto.categoria.nombre}</p>
                <p className="font-bold">Estatus:</p><p className="text-gray-500">{producto.estatus}</p>
                <p className="font-bold">Fech. Registro:</p><p className="text-gray-500">{moment(producto.fecha_registro).format("DD/MM/YYYY HH:SS:MM")}</p>
                <p className="font-bold">Fech. Ult. Actualizacion:</p><p className="text-gray-500">{moment(producto.fecha_actualizacion).format("DD/MM/YYYY HH:SS:MM")}</p>
            </div>
            <p className="text-gray-500 text-sm text-center mt-5">Para mas informacion acerca del producto contactar al encagado de almacen</p>
        </div>
    );
}