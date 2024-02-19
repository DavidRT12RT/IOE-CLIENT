import { Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Producto } from "../../../productos/interfaces/Producto";

interface ProductosContainerProps{
    productos:Producto[]
}

export default function ProductosContainer({productos}:ProductosContainerProps){
    return (
        <div className="boxContainer ProductosContainer">
            <h2 className="font-extrabold text-4xl">Productos</h2>
            {/* <Input
                size="sm"
                placeholder="Buscar por nombre"
            /> */}
            <Table isStriped hideHeader removeWrapper>                
                <TableHeader>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>CATEGORIA</TableColumn>
                    <TableColumn>STOCK</TableColumn>
                    <TableColumn>ALMACENES</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"Ningun producto registrado con el provedor"}>
                    {/* {productos.map((producto:Producto,index:number) => (
                        <TableRow key={index}>
                            <TableCell className="font-bold text-lg">{producto.nombre}</TableCell>
                            <TableCell>{producto.categoria.nombre}</TableCell>
                            <TableCell>{producto.stock}</TableCell>
                            <TableCell>0001</TableCell>
                        </TableRow>
                    ))} */}
                    {[]}
                </TableBody>

            </Table>
        </div>
    );
};