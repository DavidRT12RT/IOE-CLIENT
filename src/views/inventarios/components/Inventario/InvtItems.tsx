import { useEffect, useMemo, useState } from "react";
import { Avatar, Button, Input, Pagination, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import { Almacen, Detalle, Inventario, Producto } from "../../interfaces/Inventario";


export default function InvtItems({
    inventario,
    isEditing,
    setIsEditing,
    
}:{
    inventario:Inventario,
    isEditing:boolean,
    setIsEditing:any,
}){

    const [ rowsPerPage,setRowsPerPage ] = useState<number>(5);
    const [ almacenesSelected,setAlmacenSelected ] = useState<string[]>([]);
    const [ page,setPage ] = useState<number>(1);
    const [ filterValue,setFilterValue ] = useState("");

    const almacenesInventario = inventario.sucursal.almacenes;
    const pages = Math.ceil(inventario.detalles.length / rowsPerPage);

    useEffect(() => {
        if(inventario != null) setAlmacenSelected([inventario.sucursal.almacenes[0]?.id,inventario.sucursal.almacenes[1]?.id]);
    },[inventario]);

    const filteredDetalles = useMemo(() => {

        let filteredDetalles = [...inventario.detalles];

        filteredDetalles = filteredDetalles.filter(detalle => {
            return detalle.almacenes.some(almacen => almacenesSelected.includes(almacen.almacenId));
        });

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        filteredDetalles = filteredDetalles.filter(detalle => {
            const producto = inventario.productos.find(producto => producto.id === detalle.productoId);
            return producto && producto.nombre.toLowerCase().includes(filterValue.toLowerCase());
        });

        return filteredDetalles.slice(start,end);

    },[inventario,almacenesSelected,page,rowsPerPage,filterValue]);


    const topContent = useMemo(() => {
        return (
            <div className="flex justify-between items-center">
                <span className="text-default-400 text-small">Total {inventario.detalles.length} detalles</span>
                <div className="flex items-center gap-5" style={{width:"35%"}}>
                    <Select 
                        label="Filas por pagina"
                        labelPlacement="outside"
                        value={[`${rowsPerPage}`]}
                        // @ts-ignore
                        onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
                    >
                        <SelectItem key={5} value={5} textValue="5">5</SelectItem>
                        <SelectItem key={10} value={10} textValue="10">10</SelectItem>
                        <SelectItem key={15} value={15} textValue="15">15</SelectItem>
                        <SelectItem key={20} value={20} textValue="20">20</SelectItem>
                    </Select>
                    <Select
                        label="Almacenes"
                        labelPlacement="outside"
                        selectedKeys={almacenesSelected}
                        selectionMode="multiple"
                        // @ts-ignore
                        onSelectionChange={(e) => setAlmacenSelected([...Array.from(e)])}
                    >
                        {inventario.sucursal.almacenes.map((almacen:Almacen) => (
                            <SelectItem key={almacen.id} value={almacen.id} textValue={`${almacen.nombre} ${almacen.descripcion}`} id={almacen.id}>{almacen.nombre} {almacen.descripcion}</SelectItem>
                        ))}
                    </Select>
                </div>

            </div>
        );
    },[almacenesSelected]);

    const almacenesColumns = almacenesSelected.map((almacenSelected:string) => {
        const almacenDB = almacenesInventario.find((almacen:Almacen) => almacen.id === almacenSelected);
        return {
            key:almacenDB?.id,
            label:`${almacenDB?.nombre.toUpperCase()} ${almacenDB?.descripcion.toUpperCase()}`
        }
    });
        

    const columns = [ 
        {
            key:"NOMBRE",
            label:"NOMBRE"
        },
        {
            key:"CATEGORIA",
            label:"CATEGORIA"
        },
        {
            key:"STOCK",
            label:"STOCK"
        },
        ...almacenesColumns
    ];

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
                        : <h1 className="font-extrabold text-4xl">{inventario.nombre_inventario}</h1>
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
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                onClear={() => setFilterValue("")}
            />
            <div>
                <Table
                    style={{color:"blck"}}
                    color="primary"
                    // isStriped
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
                                color="primary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    }
                >
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column?.key}>{column?.label}</TableColumn>}
                    </TableHeader>
                    <TableBody emptyContent={"Ningun detalle por mostrar"}>
                        {

                            filteredDetalles.map((detalle:Detalle,index:number) => {

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
                                        <TableCell className="font-bold">
                                            {/* {inventario.sucursal.almacenes.find((almacen:any) => almacen.id === almacenesSelected).nombre} */}
                                            {producto?.categoria.nombre}
                                        </TableCell>
                                        <TableCell>
                                            <p className="font-bold">{producto?.stock}</p>
                                        </TableCell>
                                        {/* @ts-ignore */}
                                        {
                                            almacenesSelected.map((almacenSelected:string) => {
                                                const almacenDetalle = detalle.almacenes.find(almacen => almacen.almacenId === almacenSelected);
                                                return (
                                                    <TableCell key={almacenSelected} className="font-bold">
                                                        {almacenDetalle ? almacenDetalle.cantidad_contada: '-'} {/* Si el almacén está disponible, muestra su nombre, de lo contrario, muestra un guion */}
                                                    </TableCell>
                                                );
                                            })
                                        }
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