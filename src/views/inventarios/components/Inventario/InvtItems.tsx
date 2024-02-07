import { useMemo } from "react";
import { Avatar, Button, Chip, Input, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Link } from "react-router-dom";
import moment from "moment";

import { CiSearch } from "react-icons/ci";
import { TbDotsVertical } from "react-icons/tb";


export default function InvtItems({
    inventario,
    isEditing,
    setIsEditing
}:any){

    const topContent = useMemo(() => {
        return (
            <div className="flex justify-between items-center">
                <span className="text-default-400 text-small">Total {inventario.detalles.length} productos</span>
                <label className="flex items-center text-default-400 text-small">
                    Filas por pagina
                    <select
                        className="bg-transparent outline-none text-default-400 text-small"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
            </div>
        );
    },[]);

    return (

        <div className="InvtItems">
            <div className="flex items-center justify-between gap-5">
                {
                    isEditing 
                        ? 
                        <input
                            defaultValue={inventario.nombre_inventario}
                            className="font-extrabold text-3xl lg:text-5xl w-full"
                            style={{padding:"0px",margin:"0px"}}
                        />
                        : <h1 className="font-extrabold text-3xl lg:text-5xl">{inventario.nombre_inventario}</h1>
                }
                {
                    isEditing 
                        ? 
                        <div className="flex gap-2 align-center">
                            <Button color="primary" onClick={() => setIsEditing(false)}>Salir</Button>
                            <Button color="danger" onClick={() => console.log("Editing...")}>Guardar cambios</Button>
                        </div>
                        :
                        <div className="flex gap-2">
                            <Button color="primary">Generar reporte</Button>
                            <Button color="danger" onClick={() => setIsEditing(true)}>Editar</Button>
                        </div>
                }                    

            </div>                
            <Input
                size="md"
                className="font-extrabold text-4xl mt-5"
                startContent={
                    <p className="font-extrabold"><CiSearch /></p>
                }
                isClearable
                placeholder="Buscar producto por su nombre"
            />
            <div>
                <Table
                    
                    color="primary"
                    topContent={topContent}
                    shadow="none"
                    aria-label="productos"
                    classNames={{
                    }}
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                page={1}
                                total={10}
                            />
                        </div>
                    }
                >
                    <TableHeader>
                        <TableColumn key={"nombre"}>NOMBRE</TableColumn>
                        <TableColumn key={"categoria"}>CATEGORIA</TableColumn>
                        <TableColumn key={"cantidad_contada"}>CANTIDAD CONTADA / FECHA ULT. ACTUALIZACION</TableColumn>
                        <TableColumn key={"stock"}>STOCK ACTUAL / FECHA ULT. ACTUALIZACION</TableColumn>
                        <TableColumn key={"acciones"}>ACCIONES</TableColumn>
                    </TableHeader>    

                    <TableBody>
                        {
                            inventario.detalles.map((detalle:any) => (
                            <TableRow key={detalle.id} textValue={detalle.id}>
                                <TableCell>                                                        
                                    <Link target="_blank" className="flex items-center gap-3" to={`/almacen/producto/${detalle.producto.id}`}>
                                        <Avatar src=""/>
                                        <p className="font-bold">
                                            {detalle.producto.nombre}
                                        </p>
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Chip color="primary" className="font-bold">
                                        {detalle.producto.categoria.nombre}
                                    </Chip>
                                </TableCell>
                                <TableCell>
                                    {isEditing 
                                        ? 
                                        <Input
                                            isRequired
                                            size="md"
                                            type="number"
                                            name="cantidad_contada"
                                            // label="Cantidad contada"
                                            value={detalle.cantidad_contada}
                                            onValueChange={(e) => console.log(e)}
                                        /> 
                                        :
                                        <div className="flex flex-col items-center">
                                            <p className="font-bold">{detalle.cantidad_contada}</p>
                                            <p className="text-gray-500 text-small">{moment(detalle.fecha_actualizacion).format("MM/DD/YYYY HH:MM:SS")}</p>
                                        </div>
                                    } 
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col items-center">
                                        <p className="font-bold">{detalle.producto.stock}</p>
                                        <p className="text-gray-500 text-small">{moment(detalle.producto.fecha_actualizacion).format("MM/DD/YYYY HH:MM:SS")}</p>
                                    </div>
                                </TableCell>
                                <TableCell className="flex justify-center">
                                    <p className="font-bold text-2xl"><TbDotsVertical/></p>
                                </TableCell>
                            </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>

            </div>

        </div>

    );

}