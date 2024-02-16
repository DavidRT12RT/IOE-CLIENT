import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Producto } from "../../interfaces/Producto";
import { HiDotsVertical } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";



interface TableProductosProps {
    productos:Producto[]
};

export default function TableProductos({productos}:TableProductosProps){

    const columns = [
        {
            key:"nombre",
            label:"NOMBRE"
        },
        {
            key:"categoria",
            label:"CATEGORIA"
        },
        {
            key:"status",
            label:"STATUS",
        },
        {
            key:"stock",
            label:"STOCK TOTAL"
        },
        {
            key:"costo promedio",
            label:"COSTO PROMEDIO"
        },
        {
            key:"actions",
            label:"ACCIONES"
        }
    ];

    return (

        <Table 
            aria-label="Tabla productos" 
            color="primary" 
            selectionMode="multiple"
            shadow="none"
            style={{padding:"0px",margin:"-10px"}}
            fullWidth
        >
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={productos} emptyContent={"Ningun producto por mostrar"}>
                {productos.map(producto => 
                    <TableRow key={producto.id}>
                        <TableCell>
                            <Link to={`/almacen/productos/${producto.id}`} className="flex  items-center gap-5">
                                <img style={{width:"50px"}} src="https://repositoriomdm.blob.core.windows.net/b2c/product-shots/20Dscto/19A0427700-500.png"/>
                                <p className="font-bold">
                                    {producto.nombre} 
                                </p>
                            </Link>
                        </TableCell>
                        <TableCell >
                            {producto.categoria.nombre}
                        </TableCell>
                        <TableCell>
                            <Chip startContent={<GoDotFill/>} color={true ? "success" : "danger"}>{true ? "Activo" : "Desactivado"}</Chip>
                        </TableCell>
                        <TableCell>{producto.stock}</TableCell>
                        <TableCell>${producto.costo_promedio}</TableCell>
                        <TableCell><HiDotsVertical/></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>

    );

}