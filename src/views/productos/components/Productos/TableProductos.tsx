import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Producto } from "../../interfaces/Producto";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { CSSProperties, ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

export enum SelectionMode {
    none = "none",
    multiple = "multiple",
    single = "single"
};

interface TableProductosProps {
    productos:Producto[];
    removeWrapper?:boolean;
    selectionMode:SelectionMode;
    extraStyles?:CSSProperties;
    showInputBar?:boolean;

    selectedKeys?:Set<string>;
    setSelectedKeys:React.Dispatch<React.SetStateAction<Set<string>>>
};

export default function TableProductos({
    productos,
    removeWrapper = false,
    selectionMode = SelectionMode.multiple,
    extraStyles,
    showInputBar = false,
    setSelectedKeys:setSelectedKeysProp
}:TableProductosProps){

    const INITIAL_VISIBLE_COLUMNS = ["NOMBRE","ESTATUS","STOCK","CATEGORIA","DESCRIPCION"];
    const columns = [
        {
            key:"SKU",
            label:"SKU"
        },
        {
            key:"NOMBRE",
            label:"NOMBRE"
        },
        {
            key:"DESCRIPCION",
            label:"DESCRIPCION"
        },
        {
            key:"CATEGORIA",
            label:"CATEGORIA"
        },
        {
            key:"ESTATUS",
            label:"ESTATUS",
        },
        {
            key:"STOCK",
            label:"STOCK TOTAL"
        },
        {
            key:"STOCK_MINIMO",
            label:"STOCK MINIMO"
        },
        {
            key:"COSTO_PROMEDIO",
            label:"COSTO PROMEDIO"
        },
        {
            key:"UNIDAD_COMPRA",
            label:"UNIDAD COMPRA"
        },
        {
            key:"UNIDAD_VENTA",
            label:"UNIDAD VENTA"
        },
        {
            key:"METODO_REABASTO",
            label:"METODO REABASTO"
        },
        {
            key:"FECHA_REGISTRO",
            label:"FECHA REGISTRO"
        },
        {
            key:"FECHA_ACTUALIZACION",
            label:"FECHA ULT. ACTUALIZACION"
        },
        {
            key:"DIAS_REABASTO",
            label:"DIAS DE REABASTO"
        }
    ];

    const [page, setPage] = useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [ visibleColumns,setVisibleColumns ] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [localSelectedKeys, setLocalSelectedKeys] = useState(new Set([]));
    const [ filterValue,setFilterValue ] = useState("");
    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        //@ts-ignore
        if(visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.key));

    },[visibleColumns]);

    useEffect(() => {
        if(setSelectedKeysProp){
            setSelectedKeysProp(localSelectedKeys);
        }
    },[localSelectedKeys]);

    const filteredProductos = useMemo(() => {
        let filteredProductos = [...productos];

        if(hasSearchFilter){
            filteredProductos = filteredProductos.filter((producto) => 
                producto.nombre.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredProductos.slice(start,end);

    },[productos,filterValue,hasSearchFilter]);

    const pages = Math.ceil(filteredProductos.length / rowsPerPage);

    const onNextPage = useCallback(() => {
        if (page < pages) {
        setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = useCallback(() => {
        if (page > 1) setPage(page - 1);
    }, [page]);

    const onRowsPerPageChange = useCallback((e:ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value:any) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else setFilterValue("");
    }, []);

    const onClear = useCallback(()=>{
        setFilterValue("")
        setPage(1)
    },[])


    const topContent = useMemo(() => {
        return (
            <div className="flex flex-col" style={extraStyles}>
                {
                    showInputBar && (
                        <Input
                            placeholder="Buscar un articulo por su nombre..."
                            variant="bordered"
                            isClearable
                            className="w-full sm:max-w-[44%]"
                            value={filterValue}
                            onClear={() => onClear()}
                            onValueChange={onSearchChange}
                        />
                    )
                }
                 <div className="flex justify-between items-center">
                    <p className="text-default-400">Mostrando {filteredProductos.length} productos</p>
                    <div className="flex items-center gap-5">
                        <label className="flex items-center text-default-400">
                            Articulos por pagina
                            <select
                                className="bg-transparent outline-none text-default-400 text-small"
                                onChange={onRowsPerPageChange}
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </label>
                        <Dropdown>
                        <DropdownTrigger>
                            <Button variant="flat">
                                Columnas
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            disallowEmptySelection
                            aria-label="Table Columns"
                            closeOnSelect={false}
                            selectedKeys={visibleColumns}
                            selectionMode="multiple"
                            // @ts-ignore
                            onSelectionChange={setVisibleColumns}
                        >
                            {columns.map((column) => (
                            <DropdownItem key={column.key} className="capitalize">
                                {(column.label)}
                            </DropdownItem>
                            ))}
                        </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    },[visibleColumns,columns,onRowsPerPageChange,filteredProductos.length,filterValue,hasSearchFilter]);

    const bottomContent = useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-default-400">
                {/* @ts-ignore */}
                {localSelectedKeys === "all"
                    ? "Todos los articulos seleccionados"
                    : `${localSelectedKeys.size} de ${filteredProductos.length} seleccionados`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                <Button isDisabled={pages === 1} variant="flat" onPress={onPreviousPage}>
                    Anterior
                </Button>
                <Button isDisabled={pages === 1} variant="flat" onPress={onNextPage}>
                    Siguiente
                </Button>
                </div>
            </div>
        );
    },[localSelectedKeys,filteredProductos.length,page,pages,filterValue,hasSearchFilter]);

    const renderCell = useCallback((producto:Producto,columnKey:string) => {
        columnKey = columnKey.toLowerCase();
        //@ts-ignore
        const cellValue = producto[columnKey];

        switch (columnKey) {
            case "nombre":
                return (
                    <Link to={`/almacen/productos/${producto.id}`} className="flex  items-center gap-5" target="_blank">
                        <img style={{width:"50px"}} src={"https://www.lentesplus.com/media/catalog/product/0/a/0an7190__1195_000a_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover"}/>
                        <p className="font-bold">{cellValue}</p>
                    </Link>
                );
            
            case "descripcion":
                return (
                    `${cellValue.slice(0,100)}...`
                );

            case "categoria":
                return (
                    <p>{producto?.categoria?.nombre}</p>
                );
            
            case "estatus":
                return (<Chip startContent={<GoDotFill/>} color={true ? "success" : "danger"}>{true ? "Activo" : "Desactivado"}</Chip>);
        
            default:
                return cellValue;
        }

    },[]);


    return (
        <Table 
            topContent={topContent}
            bottomContent={bottomContent}
            removeWrapper={removeWrapper}
            selectedKeys={localSelectedKeys}
            // @ts-ignore
            onSelectionChange={setLocalSelectedKeys}
            isStriped
            aria-label="Tabla productos" 
            color="primary" 
            selectionMode={selectionMode}
            shadow="none"
            fullWidth
        >
            <TableHeader columns={headerColumns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={filteredProductos} emptyContent={"Ningun producto por mostrar"}>
                {(producto) => (
                    <TableRow key={producto.id}>
                        {/* @ts-ignore */}
                        {(columnKey) => <TableCell>{renderCell(producto,columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>

    );

}