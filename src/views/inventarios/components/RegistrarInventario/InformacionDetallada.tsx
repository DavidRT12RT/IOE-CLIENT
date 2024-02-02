import { Avatar, Chip, Input, Modal, ModalBody, ModalContent, ModalHeader, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function InformacionDetallada ({values,setValues,handleChange,productos,categorias,sucursales}:any){

    const { isOpen: isOpenModalProductos, onOpen: onOpenModalProductos,onClose:onCloseProductos } = useDisclosure();


    interface filterValue {
        nombre:string;
        categorias:string[];
        sucursales:string[];
    };

    const [ filterValue,setFilterValue ] = useState<filterValue>({
        nombre:"",
        categorias:[],
        sucursales:[]
    });


    const filteredProductos = useMemo(() => {

        let filteredProductos = [...productos];

        if(filterValue.nombre.length >= 1) filteredProductos = filteredProductos.filter(producto => producto.nombre.toLowerCase().includes(filterValue.nombre.toLowerCase()));

        if(filterValue.categorias.length >= 1) filteredProductos = filteredProductos.filter(producto => filterValue.categorias.includes(producto.categoria.id));

        return filteredProductos

    },[filterValue,categorias,sucursales,productos]);
    
    const handleAddProductosToValues = (value:any) => {

        if(value === "all"){
            //Quiere cargar todos los productos que se muestran en la tabla actualmente ,sean filtrados o no
            return setValues(() => ({
                ...values,
                productos:[
                    ...values.productos,
                    ...filteredProductos.map(producto => producto.id)
                ]
            }));
        }

        setValues(() => ({
            ...values,
            productos:[
                ...Array.from(value)
            ]
        }))

    }


    return (
        <>
            <Modal 
                size="lg"
                isOpen={isOpenModalProductos}
                onOpenChange={onOpenModalProductos}
                isDismissable
                scrollBehavior="inside"
                hideCloseButton
                onClose={onCloseProductos}
            >
                <ModalContent>
                    {(content) => (
                        <>
                            <ModalHeader style={{padding:"-1"}}>
                                <Input
                                    autoFocus
                                    size="lg"
                                    className="font-extrabold text-4xl"
                                    startContent={
                                        <p className="font-extrabold"><CiSearch /></p>
                                    }
                                    isClearable
                                    placeholder="Buscar producto por nombre"
                                    value={filterValue.nombre}
                                    // onValueChange={setFilterValue}
                                    onChange={({target}) => {
                                        const { value } = target;
                                        setFilterValue((values) => ({...values,nombre:value}));
                                    }}
                                    onClear={() => setFilterValue((values) => ({...values,nombre:""}))}
                                />
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-gray-500 font-bold">Filtros</p>
                                <div className="flex items-center gap-4">
                                    <Select
                                        label={<p className="font-bold">Categoria producto</p>}
                                        placeholder="Seleciona una categoria"
                                        selectionMode="multiple"
                                        //@ts-ignore
                                        onSelectionChange={(e) => setFilterValue((values) => ({...values,categorias:[...Array.from(e)]}))}
                                    >
                                        {categorias.map((categoria:any) => (
                                            <SelectItem key={categoria.id} value={categoria.id}>
                                                {categoria.nombre}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    {/* <Select
                                        label={<p className="font-bold">Sucursal</p>}
                                        placeholder="Selecciona una sucursal"
                                        //@ts-ignore
                                        onSelectionChange={(e) => setFilterValue((values) => ({...values,sucursales:[...Array.from(e)]}))}
                                    >
                                        {sucursales.map((sucursal:any) => (
                                            <SelectItem key={sucursal.id} value={sucursal.id} textValue={`${sucursal.ciudad} ${sucursal.calle}`}>
                                                {sucursal.ciudad} {sucursal.calle}
                                            </SelectItem>
                                        ))}
                                    </Select> */}
                                </div>
                                <Table
                                    color="primary"
                                    shadow="none"
                                    aria-label="produtos"
                                    selectionMode="multiple"
                                    selectedKeys={values.productos}
                                    // onSelectionChange={(e) => setValues(() => ({...values,productos:[...Array.from(e)]}))}
                                    onSelectionChange={handleAddProductosToValues}
                                >
                                    <TableHeader>
                                        <TableColumn key={"nombre"}>NOMBRE</TableColumn>
                                        <TableColumn key={"categoria"}>CATEGORIA</TableColumn>
                                        <TableColumn key={"stock"}>STOCK</TableColumn>
                                    </TableHeader>  
                                    <TableBody>
                                        {
                                            filteredProductos.map((producto:any,index:number) => (
                                                <TableRow key={producto.id} textValue={producto.id}>
                                                    <TableCell className="flex items-center gap-3">
                                                        <Avatar src=""/>
                                                        <p className="font-bold">
                                                            {producto.nombre}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Chip color="primary" className="font-bold">
                                                            {producto.categoria.nombre}
                                                        </Chip>
                                                    </TableCell>
                                                    <TableCell>{producto.stock}</TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <Select
                label="Tipo de inventario"
                name="tipo_inventario"
                value={values.tipo_inventario}
                //@ts-ignore
                onChange={(e) => handleChange(e)}
                description="El tipo del inventario marca que productos seran los que estaran en el inventario"
            >
                <SelectItem key={"categoria"} value={"categoria"}>Categoria</SelectItem>
                <SelectItem key={"personalizado"} value={"personalizado"}>Personalizado</SelectItem>
            </Select>


            {values?.tipo_inventario === "personalizado" 
                ?
                (
                    <Input
                        label="Productos a elegir"
                        onClick={() => onOpenModalProductos()}
                    />
                )
                :
                    <Select
                        label={<p className="font-bold">Categoria</p>}
                        placeholder="Seleciona una categoria para los productos"
                    >
                        {categorias.map((categoria:any) => (
                            <SelectItem key={categoria.id} value={categoria.id}>
                                {categoria.nombre}
                            </SelectItem>
                        ))}
                    </Select>
            } 

            <Select
                label={<p className="font-bold">Sucursal</p>}
                description="Sucursal donde se llevara acabo el inventario"
                placeholder="Selecciona una sucursal"
            >
                {sucursales.map((sucursal:any) => (
                    <SelectItem key={sucursal.id} value={sucursal.id} textValue={`${sucursal.ciudad} ${sucursal.calle}`}>
                        {sucursal.ciudad} {sucursal.calle}
                    </SelectItem>
                ))}
            </Select>

        </>
    );

}