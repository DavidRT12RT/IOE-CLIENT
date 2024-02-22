import { ChangeEvent } from "react";
import { useForm } from "../../../../hooks/useForm";
import { ProvedorProductoNew, initialFormValues } from "../../../productos/hooks/useRegistrarProducto";
import { Provedor } from "../../interfaces/Provedor.interface";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { message } from "antd";

interface ProvedoresProps {
    values:initialFormValues,
    setValues:React.Dispatch<React.SetStateAction<initialFormValues>>,
    provedores:Provedor[];
};

export default function ProvedoresProducto({
    values,
    setValues,
    provedores
}:ProvedoresProps){

    const INITIAL_NEW_PROVEDOR_VALUES:ProvedorProductoNew = {
        costo:"",
        provedor:provedores[0].id
    };

    const { values:newProvedorValues,setValues:setNewProvedorValues,handleChange:handleChangeNewProvedorValues } = useForm<ProvedorProductoNew>(INITIAL_NEW_PROVEDOR_VALUES);
    const { isOpen,onOpen,onOpenChange,onClose } = useDisclosure();

    const handleAddNewProvedor = () => {

        //Checar si ya existe para no dejarlo agregar!
        const existeProvedor = values.provedores.some(provedor => provedor.provedor === newProvedorValues.provedor) 
        if(existeProvedor) return message.error("Provedor ya existente en la lista!");

        setValues((values) => ({...values,provedores:[...values.provedores,newProvedorValues]}));
        setNewProvedorValues(INITIAL_NEW_PROVEDOR_VALUES);
        onClose();

    }


    return (
        <>
            <div>
                <Button color="primary" onClick={onOpen}>
                    Vincular provedor
                </Button>
            </div>
            <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader><h2 className="font-bold text-2xl">Vincular provedor</h2></ModalHeader>
                        <ModalBody>
                            <Select
                                name="provedor"
                                label="Provedor"
                                //@ts-ignore
                                value={[newProvedorValues.provedor]}
                                //@ts-ignore
                                onChange={handleChangeNewProvedorValues}
                            >
                                {provedores.map((provedor) => (
                                    <SelectItem value={provedor.id} key={provedor.id}>{`${provedor?.nombre} ${provedor.alias}`}</SelectItem>
                                ))}
                            </Select>

                            <Input
                                name="costo"
                                label="Costo"
                                value={newProvedorValues.costo}
                                onChange={handleChangeNewProvedorValues}
                            />
                        </ModalBody>
                    </>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddNewProvedor}>Vincular provedor al producto</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Table
                color="primary"
                removeWrapper
                aria-label="Provedores producto"
                isStriped
                style={{padding:"0px",margin:"0px",color:"black"}}
            >
                <TableHeader>
                    <TableColumn>NOMBRE PROVEDOR</TableColumn>
                    <TableColumn>ALIAS PROVEDOR</TableColumn>
                    <TableColumn>RFC PROVEDOR</TableColumn>
                    <TableColumn>COSTO</TableColumn>
                </TableHeader>

                <TableBody emptyContent={"Ningun provedor agregado aun"}>
                    {values.provedores.map((provedorProducto:ProvedorProductoNew) => {

                        const provedorDB = provedores.find(provedor => provedor.id === provedorProducto.provedor)
                        
                        return (<TableRow key={provedorProducto.provedor}>
                            <TableCell>{provedorDB?.nombre}</TableCell>
                            <TableCell>{provedorDB?.alias}</TableCell>
                            <TableCell>{provedorDB?.RFC}</TableCell>
                            <TableCell>{provedorProducto?.costo}</TableCell>
                        </TableRow>)
                    })}
                </TableBody>
            </Table>

        </>
    );

}