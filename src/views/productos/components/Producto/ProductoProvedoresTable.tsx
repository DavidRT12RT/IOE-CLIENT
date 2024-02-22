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
            </TableHeader>
            <TableBody>
                {
                    producto.provedorProductos.map((provedorProducto:ProvedorProducto) => (
                        <TableRow>
                            <TableCell className="font-bold text-lg">
                                <Link to={`/almacen/provedores/${provedorProducto.provedor.id}`}>{provedorProducto.provedor.nombre}</Link>
                            </TableCell>
                            <TableCell>{provedorProducto.provedor.alias}</TableCell>
                            <TableCell className="font-bold text-lg">{provedorProducto.provedor.tipoDePersona}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );

}