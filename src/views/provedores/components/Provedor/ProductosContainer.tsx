import { Chip, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Producto } from "../../../productos/interfaces/Producto";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

interface ProductosContainerProps{
    productos:Producto[];
}

export default function ProductosContainer({productos = []}:ProductosContainerProps){

    return (
        <div className="boxContainer ProductosContainer">
            <h2 className="font-extrabold text-4xl">Productos</h2>
            <Input
                size="sm"
                placeholder="Buscar por nombre"
                variant="flat"
            />
            <Table isHeaderSticky removeWrapper hideHeader>                
                <TableHeader>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>STOCK</TableColumn>
                    <TableColumn>COSTO PROMEDIO</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                    {/* <TableColumn>ALMACENES</TableColumn> */}
                </TableHeader>
                <TableBody emptyContent={"Ningun producto registrado con el provedor"}>
                    {productos.map((producto:Producto,index:number) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Link className="flex gap-2 items-center" to={`/almacen/productos/${producto.id}`} target="_blank">
                                    <img style={{width:"50px"}} src="https://repositoriomdm.blob.core.windows.net/b2c/product-shots/20Dscto/19A0427700-500.png"/>
                                    <div>
                                        <p className="font-bold">{producto.nombre}</p>
                                        <p className="text-gray-500 text-sm">{producto.categoria.nombre}</p>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <p className="font-bold">Stock {producto.stock}</p>
                                <p className="text-gray-500 text-sm">Min {producto.stock_minimo}</p>
                            </TableCell>
                            <TableCell className="font-bold">${producto.costo_promedio}</TableCell>
                            <TableCell className="font-bold">
                                <Chip startContent={<GoDotFill/>} color={true ? "success" : "danger"}>{true ? "Activo" : "Desactivado"}</Chip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </div>
    );
};