import { useEffect, useMemo, useState } from "react";
import { Avatar, Button, Chip, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { Almacen, Detalle, Inventario, Producto } from "../../interfaces/Inventario";


export default function InvtItems({
    inventario,
    isEditing,
    setIsEditing,
    
    almacenesSelected,
    setAlmacenSelected
}:{
    inventario:Inventario,
    isEditing:boolean,
    setIsEditing:any,
    almacenesSelected:any;
    setAlmacenSelected:any
}){

    const [ rowsPerPage,setRowsPerPage ] = useState<number>(5);

    useEffect(() => {
        if(inventario != null) setAlmacenSelected([inventario.sucursal.almacenes[0]?.id]);
    },[inventario]);

    const filteredDetalles = useMemo(() => {

        let filteredDetalles = [...inventario.detalles];

        filteredDetalles = filteredDetalles.filter(detalle => {
            return detalle.almacenes.some(almacen => almacenesSelected.includes(almacen.almacenId));
        });

        return filteredDetalles;

    },[inventario,almacenesSelected]);


    const topContent = useMemo(() => {
        return (
            <div className="flex justify-between items-center">
                <span className="text-default-400 text-small">Total {inventario.detalles.length} productos</span>
                <div className="flex items-center gap-5">
                    <label className="flex items-center text-default-400 text-small">
                        Filas 
                        <select 
                            id="rowsPerPageSelect"
                            value={rowsPerPage} 
                            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                        </select>
                    </label>
                    <label className="flex items-center text-default-400 text-small">
                        Almacenes 
                        <Select
                            className="ml-3"
                            selectedKeys={almacenesSelected}
                            selectionMode="multiple"
                            onSelectionChange={(e) => setAlmacenSelected([...Array.from(e)])}
                        >
                            {inventario.sucursal.almacenes.map((almacen:Almacen) => (
                                <SelectItem key={almacen.id} value={almacen.id} textValue={`${almacen.nombre} ${almacen.descripcion}`} id={almacen.id}>{almacen.nombre} {almacen.descripcion}</SelectItem>
                            ))}
                        </Select>
                    </label>

                </div>

            </div>
        );
    },[almacenesSelected]);

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
                            <Button color="danger" onClick={() => setIsEditing(true)}>Capturar</Button>
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
                        <TableColumn key={"nombre"}>NOMBRE PRODUCTO</TableColumn>
                        <TableColumn key={"categoria"}>CATEGORIA</TableColumn>
                        <TableColumn key={"cantidad_contada"}>CANTIDAD CONTADA / ALMACEN</TableColumn>
                        <TableColumn key={"stock"}>STOCK ACTUAL / FECHA ULT. ACT.</TableColumn>
                    </TableHeader>    
                    <TableBody>
                        {

                            filteredDetalles.slice(0,rowsPerPage).map((detalle:Detalle,index:number) => {

                                const producto = inventario.productos.find((producto:Producto) => producto.id === detalle.productoId);

                                return (
                                    <TableRow key={index}>
                                        <TableCell>                                                        
                                            <Link target="_blank" className="flex items-center gap-3" to={`/almacen/productos/${detalle.productoId}`}>
                                                <Avatar src=""/>
                                                <p className="font-bold">
                                                    {producto?.nombre}
                                                </p>
                                            </Link>
                                        </TableCell>
                                        <TableCell>
                                            {/* {inventario.sucursal.almacenes.find((almacen:any) => almacen.id === almacenesSelected).nombre} */}
                                            <Chip>{producto?.categoria.nombre}</Chip>
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
                                                    // value={detalle.cantidad_contada}
                                                    onValueChange={(e) => console.log(e)}
                                                /> 
                                                :
                                                <div className="flex flex-col items-center">
                                                    <p className="font-bold">{detalle.almacenes[0].cantidad_contada}</p>
                                                </div>
                                            } 
                                        </TableCell>
                                        <TableCell className="flex flex-col items-center">
                                            <p className="font-bold">{producto?.stock}</p>
                                            {/* <p className="text-gray-500 text-small">{moment(detalle.producto.fecha_actualizacion).format("MM/DD/YYYY HH:MM:SS")}</p> */}
                                        </TableCell>
                                    </TableRow>
                                )
                        })
                        }
                    </TableBody>
                </Table>

            </div>

        </div>

    );

}