import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, useDisclosure } from "@nextui-org/react";
import { CuentaBancaria, RegisterProvedor } from "../../hooks/useRegistrarProvedor";
import { useForm } from "../../../../hooks/useForm";

interface InformacionBancariaProps {
    values:RegisterProvedor;
    setValues:(newValues:RegisterProvedor) => void;
};

export default function InformacionBancaria({values,setValues}:InformacionBancariaProps){

    const { isOpen,onOpen,onOpenChange,onClose } = useDisclosure();

    const INITIAL_NEW_BANK_VALUES:CuentaBancaria  = {
        CLABE:"",
        tipo:"",
        banco:"",
        numero_cuenta:""
    };

    const {
        values:newBankValues,
        handleChange,
        setValues:setNewBankValues
    } = useForm(INITIAL_NEW_BANK_VALUES);

    const handleAddNewBank = () => {
        //Quitar espacios        
        newBankValues.CLABE = newBankValues.CLABE.replace(/\s+/g, '');
        newBankValues.numero_cuenta= newBankValues.numero_cuenta.replace(/\s+/g, '');


        setValues(({...values,cuentasBancarias:[...values.cuentasBancarias,newBankValues]})); // Anadimos el banco a los valores del formulario
        setNewBankValues(INITIAL_NEW_BANK_VALUES); // Limpiamos los valores del formulario de creacion de banco
        onClose();
    }

    return (
        <>

            <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
                <ModalContent>
                    <>
                        <ModalHeader><h2 className="font-bold text-2xl">Crear banco</h2></ModalHeader>
                        <ModalBody>
                            <Input
                                name="numero_cuenta"
                                label="Numero cuenta"
                                value={newBankValues.numero_cuenta}
                                onChange={handleChange}
                            />
                            <Input
                                name="banco"
                                label="Banco"
                                value={newBankValues.banco}
                                onChange={handleChange}
                            />
                            <Input
                                name="CLABE"
                                label="CLABE"
                                value={newBankValues.CLABE}
                                onChange={handleChange}
                            />
                            <Input
                                name="tipo"
                                label="Tipo"
                                value={newBankValues.tipo}
                                onChange={handleChange}
                            />
                        </ModalBody>
                    </>
                    <ModalFooter>
                        <Button color="primary" onClick={handleAddNewBank}>Guardar banco en provedor</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
            <div>
                <Button color="primary" onClick={onOpen}>Crear banco</Button>
            </div>
            <Table 
                color="primary" 
                aria-label="Datos bancarios" 
                removeWrapper 
                style={{padding:"0px",margin:"0px",color:"black"}}
                isStriped
            >
                <TableHeader>
                    <TableColumn>NUMERO DE CUENTA</TableColumn>
                    <TableColumn>CLABE</TableColumn>
                    <TableColumn>TIPO</TableColumn>
                    <TableColumn>BANCO</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"Ningun banco registrado con el provedor"}>
                    {values.cuentasBancarias.map((cuentaBancaria:CuentaBancaria) => (
                        <TableRow>
                            <TableCell>{cuentaBancaria.numero_cuenta}</TableCell>
                            <TableCell>{cuentaBancaria.CLABE}</TableCell>
                            <TableCell>{cuentaBancaria.tipo}</TableCell>
                            <TableCell>{cuentaBancaria.banco}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>

    );


}