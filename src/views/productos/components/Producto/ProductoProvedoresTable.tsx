import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Producto, ProvedorProducto } from "../../interfaces/Producto";
import { Link } from "react-router-dom";

export default function ProductoProvedoresTable({producto}:{producto:Producto}){

    return (
        <Table removeWrapper>
            <TableHeader>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>ALIAS</TableColumn>
                <TableColumn>TIPO DE PERSONA</TableColumn>
                <TableColumn>COSTO</TableColumn>
            </TableHeader>
            <TableBody>
                {
                    producto.provedorProductos.map((provedorProducto:ProvedorProducto) => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/almacen/provedores/${provedorProducto.provedor.id}`}>{provedorProducto.provedor.nombre}</Link>
                            </TableCell>
                            <TableCell>{provedorProducto.provedor.alias}</TableCell>
                            <TableCell >{provedorProducto.provedor.tipoDePersona}</TableCell>
                            <TableCell >${provedorProducto.costo}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );

}