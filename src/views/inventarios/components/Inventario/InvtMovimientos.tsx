import { Avatar, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function InvtMovimientos(){

    const movimientos = [
        {
            productos_capturados:[
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Armazon GUCCI",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:20
                },
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Mica cristal",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:10
                }
            ],
            tipo:"captura inventario",
            fecha_captura:"2024-01-22 13:10:41.992173",
            auxiliar_inventario:{
                nombre:"David",
            }
        },
        {
            productos_capturados:[
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Armazon GUCCI",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:20
                },
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Mica cristal",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:10
                }
            ],
            tipo:"captura inventario",
            fecha_captura:"2024-01-21 13:10:41.992173",
            auxiliar_inventario:{
                nombre:"Roberto",
            }
        },
        {
            productos_capturados:[
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Armazon GUCCI",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:20
                },
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Mica cristal",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:10
                }
            ],
            tipo:"captura inventario",
            fecha_captura:"2024-01-22 13:10:41.992173",
            auxiliar_inventario:{
                nombre:"Antonio",
            }
        },
        {
            productos_capturados:[
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Armazon GUCCI",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:20
                },
                {
                    producto:{
                        id: "c5c97e96-a61e-450d-ad1d-d44c7d39bf9a",
                        nombre: "Mica cristal",
                        descripcion: "Armazon para todo tipo de usos",
                        usos: [],
                        material: null,
                        color: null,
                        stock: 10,
                        stock_minimo: 1,
                        costo_promedio: 1200,
                        fecha_registro: "2024-01-22T19:06:09.889Z",
                        fecha_actualizacion: "2024-01-22T19:06:09.889Z"
                    },
                    cantidad_contada:10
                }
            ],
            tipo:"captura inventario",
            fecha_captura:"2024-01-22 13:10:41.992173",
            auxiliar_inventario:{
                nombre:"Sergio",
            }
        },
    ];



    return (
        <>
            <div>
                <Table
                    color="primary"
                    shadow="none"
                    aria-label="movimientos"
                >
                    <TableHeader>
                        <TableColumn key={"AUXILIAR"}>AUXILIAR/SUPERVISOR</TableColumn>
                        <TableColumn key={"TIPO_EVENTO"}>TIPO DE EVENTO / PRODUCTOS AFECTADOS</TableColumn>
                        <TableColumn key={"FECHA_REGISTRO"}>FECHA REGISTRO</TableColumn>
                    </TableHeader>

                    <TableBody>
                        {movimientos.map(movimiento => (
                            <TableRow key={1}>
                                <TableCell>
                                    <Link target="_blank" className="flex items-center gap-3" to={`/almacen/`}>
                                        <Avatar src=""/>
                                        <p className="font-bold">
                                            {movimiento.auxiliar_inventario.nombre}
                                        </p>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <p className="text-gray-500 font-bold">{movimiento.tipo} {movimiento.productos_capturados.length}</p>
                                </TableCell>
                                <TableCell>
                                    <p className="text-gray-500 font-bold">{moment(movimiento.fecha_captura).format("DD/MM/YYYY HH:MM:SS")}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </div>
        </>
    );

}