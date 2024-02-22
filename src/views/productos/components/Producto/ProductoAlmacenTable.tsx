import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Producto } from "../../interfaces/Producto";

export default function ProductoAlmacenTable({producto}:{producto:Producto}){

    return (
        <Table removeWrapper>
            <TableHeader>
                <TableColumn>ALMACEN</TableColumn>
                <TableColumn>STOCK</TableColumn>
                <TableColumn>TIPO</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    producto.productosAlmacen.map(productoAlmacen => (
                        <TableRow key={productoAlmacen.id}>
                            <TableCell>{productoAlmacen.almacen.nombre} {productoAlmacen.almacen.descripcion}</TableCell>
                            <TableCell>{productoAlmacen.stock}</TableCell>
                            <TableCell>{productoAlmacen.almacen.tipo_almacen}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );

}