import { Chip } from "@nextui-org/react";
import { Producto } from "../../interfaces/Producto";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

interface ProductoCardProps {
    producto:Producto;
};

export default function ProductoCard({producto}:ProductoCardProps){

    return (
        <Link className="productoCard" to={`/almacen/productos/${producto.id}`}>

            <div className="imgContainer">
                <img src="https://repositoriomdm.blob.core.windows.net/b2c/product-shots/20Dscto/19A0427700-500.png"/>
                {/* <Image isZoomed alt="Producto img" src="https://repositoriomdm.blob.core.windows.net/b2c/product-shots/20Dscto/19A0427700-500.png"/> */}
            </div>

            <div className="productoNameAndStatusContainer">
                <h1 className="font-bold text-xl">{producto.nombre}</h1>
                <Chip startContent={<GoDotFill/>} variant="faded" color={true ? "success" : "danger"}>{true ? "Activo" : "Desactivado"}</Chip>
            </div>
            <p className="text-lg">${producto.costo_promedio}</p>
            <p className="text-gray-500 text-sm">Stock: {producto.stock} </p>
            <p className="text-gray-500 text-sm">{producto?.categoria?.nombre}</p>
        </Link>
    );

}