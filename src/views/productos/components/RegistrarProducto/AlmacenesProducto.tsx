import { ChangeEvent } from "react";
import { AlmacenProductoNew, initialFormValues } from "../../hooks/useRegistrarProducto";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, SelectSection, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { useForm } from "../../../../hooks/useForm";
import { Sucursal } from "../../../inventarios/interfaces/Inventario";
import { message } from "antd";

interface ProvedoresProductoProps {
    values:initialFormValues,
    setValues:React.Dispatch<React.SetStateAction<initialFormValues>>,
    sucursales:Sucursal[];
};

export default function AlmacenesProducto({values,setValues,sucursales}:ProvedoresProductoProps){

    const { isOpen,onOpenChange,onOpen,onClose } = useDisclosure();

    const INITIAL_NEW_ALMACEN_VALUES:AlmacenProductoNew = {
        stock:"",
        almacen:""
    };

    const { values:addNewAlmacenValues,setValues:setNewAlmacenValues,handleChange:handleChangeNewAlmacenValues } = useForm(INITIAL_NEW_ALMACEN_VALUES);

    const handleAddNewAlmacenProducto = () => {
        //Checar si ya existe para no dejarlo agregar!
        const existeAlmacen = values.almacenes.some(almacenProducto => almacenProducto.almacen === addNewAlmacenValues.almacen);
        if(existeAlmacen) return message.error("Almacen ya existente en la lista!");

        setValues((values) => ({...values,almacenes:[...values.almacenes,addNewAlmacenValues]}))
        setNewAlmacenValues(INITIAL_NEW_ALMACEN_VALUES);
        onClose();
    }

    return (
        <>
            <div>
                <Button color="primary" onClick={onOpen}>
                    Vincular almacen 
                </Button>
            </div>
            <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader><h2 className="font-bold text-2xl">Vincular almacen y su stock</h2></ModalHeader>
                        <ModalBody>
                            <Select
                                label="Almacenes de las sucursales"
                                placeholder="Selecciona un almacen donde estara el producto"
                                name="almacen"
                                //@ts-ignore
                                value={[addNewAlmacenValues.almacen]}
                                //@ts-ignore
                                onChange={handleChangeNewAlmacenValues}
                            >
                                {
                                    sucursales.map((sucursal:Sucursal) => (
                                        <SelectSection key={sucursal.id} showDivider title={`${sucursal.ciudad} ${sucursal.calle}`}>
                                            {
                                                sucursal.almacenes.map((almacen:any) => (
                                                    <SelectItem
                                                        key={almacen.id} 
                                                        value={almacen.id} 
                                                        textValue={`${almacen.nombre} ${almacen.descripcion}`}
                                                    >
                                                        {almacen.nombre} {almacen.descripcion}

                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectSection>
                                    ))
                                }
                            </Select>

                            <Input
                                name="stock"
                                label="Stock"
                                value={addNewAlmacenValues.stock}
                                onChange={handleChangeNewAlmacenValues}
                            />
                        </ModalBody>
                    </>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddNewAlmacenProducto}>Vincular almacen al producto</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Table
                color="primary"
                removeWrapper
                aria-label="Almacenes del producto"
                isStriped
                style={{padding:"0px",margin:"0px",color:"black"}}
            >
                <TableHeader>
                    <TableColumn>ID ALMACEN</TableColumn>
                    <TableColumn>STOCK</TableColumn>
                </TableHeader>

                <TableBody emptyContent={"Ningun almacen agregado aun"}>
                    {values.almacenes.map((almacenProducto) => {
                        return (
                            <TableRow key={almacenProducto.almacen}>
                                <TableCell>{almacenProducto.almacen}</TableCell>
                                <TableCell>{almacenProducto.stock}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>

        </>
    );



}