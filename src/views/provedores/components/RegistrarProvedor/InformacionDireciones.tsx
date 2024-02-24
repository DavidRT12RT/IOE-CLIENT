import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { Direccion, RegisterProvedor } from "../../hooks/useRegistrarProvedor";
import { useForm } from "../../../../hooks/useForm";


interface InformacionDireccionesProps{
    values:RegisterProvedor,
    setValues:(newValues:RegisterProvedor) => void;
}

export default function InformacionDirecciones({values,setValues}:InformacionDireccionesProps){


    const { isOpen,onOpen,onOpenChange,onClose } = useDisclosure();

    const INITIAL_NEW_ADDRESS_VALUES:Direccion = {
        calle:"",
        estado:"",
        ciudad:"",
        CP:""
    };

    const {
        values:newAddressValues,
        handleChange,
        setValues:setNewAddressValues
    } = useForm(INITIAL_NEW_ADDRESS_VALUES);

    const handleAddNewAddress = () => {
        setValues(({...values,direcciones:[...values.direcciones,newAddressValues]})); // Anadimos el banco a los valores del formulario
        setNewAddressValues(INITIAL_NEW_ADDRESS_VALUES); // Limpiamos los valores del formulario de creacion de banco
        onClose();
    }

    return (
        <>

            <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader><h2 className="font-bold text-2xl">Crear direccion</h2></ModalHeader>
                        <ModalBody>
                            <Input
                                name="CP"
                                label="CP"
                                value={newAddressValues.CP}
                                onChange={handleChange}
                            />
                            <Input
                                name="calle"
                                label="Calle"
                                value={newAddressValues.calle}
                                onChange={handleChange}
                            />
                            <Input
                                name="ciudad"
                                label="Ciudad"
                                value={newAddressValues.ciudad}
                                onChange={handleChange}
                            />
                            <Input
                                name="estado"
                                label="Estado"
                                value={newAddressValues.estado}
                                onChange={handleChange}
                            />

                        </ModalBody>
                    </>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddNewAddress}>Guardar direccion provedor</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
            <div>
                <Button color="primary" onClick={onOpen}>Crear direccion</Button>
            </div>
            <Table aria-label="Datos bancarios" removeWrapper style={{padding:"0px",margin:"0px",color:"black"}}>
                <TableHeader>
                    <TableColumn>CALLE</TableColumn>
                    <TableColumn>CIUDAD</TableColumn>
                    <TableColumn>ESTADO</TableColumn>
                    <TableColumn>CP</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"Ninguna direccion registrada con el provedor"}>
                    {values.direcciones.map((direccion:Direccion,index:number) => (
                        <TableRow key={index}>
                            <TableCell>{direccion.calle}</TableCell>
                            <TableCell>{direccion.ciudad}</TableCell>
                            <TableCell>{direccion.estado}</TableCell>
                            <TableCell>{direccion.CP}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>

    );



}