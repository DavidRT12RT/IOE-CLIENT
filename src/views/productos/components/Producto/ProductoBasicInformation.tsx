import { Input } from "@nextui-org/react";

export default function ProductoBasicInformation({producto,isEditing}:any){
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
            <p className="text-gray-500">{producto.id}</p>
            <div className="grid grid-cols-2 gap-2 mt-5 px-6">
                <p className="font-bold">Material:</p><p className="text-gray-500">{producto?.material != null ? producto.material : "No especificado"}</p>
                <p className="font-bold">Color:</p><p className="text-gray-500">{producto?.color != null ? producto.color : "No especificado"}</p>
                <p className="font-bold">SKU:</p><p className="text-gray-500">{producto.id.slice(0,13)}</p>
                <p className="font-bold">Stock total:</p><p className="text-gray-500">{producto.stock}</p>
                <p className="font-bold">Stock minimo:</p><p className="text-gray-500">{producto.stock_minimo}</p>
                <p className="font-bold">Costo:</p><p className="text-gray-500">{producto.costo_promedio}</p>
                <p className="font-bold">Categoria:</p><p className="text-gray-500">{producto.categoria.nombre}</p>
                <p className="font-bold">Inventariable:</p><p className={"text-gray-500 " + producto.inventariable ? "text-success font-bold" : "text-danger font-bold"}>{producto.inventariable ? "INVENTARIABLE" : "NO INVENTARIABLE"}</p>
            </div>
            <p className="text-gray-500 text-sm text-center mt-5">Para mas informacion acerca del producto contactar al encagado de almacen</p>
        </div>
    );
}