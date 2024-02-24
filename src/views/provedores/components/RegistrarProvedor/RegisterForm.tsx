import { Button, Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Steps } from "antd";

import InformacionBasica from "./InformacionBasica";
import InformacionCompra from "./InformacionCompra";

import useRegistrarProvedor from "../../hooks/useRegistrarProvedor";
import InformacionBancaria from "./InformacionBancaria";
import InformacionDirecciones from "./InformacionDireciones";

export default function RegisterForm (){

    const { isOpen,onOpen,onClose } = useDisclosure();

    const {
        current,
        setCurrent,

        values,
        setValues,
        handleChange,

        handleAddNewProvedor
    } = useRegistrarProvedor();

    const steps = [
        {
            title:"Informacion basica del provedor",
            content:<InformacionBasica values={values} handleChange={handleChange}/>,
            id:1
        },
        {
            title:"Condiciones de compra",
            content:<InformacionCompra values={values} handleChange={handleChange} setValues={setValues}/>,
            id:2
        },
        {
            title:"Cuentas bancarias",
            content:<InformacionBancaria values={values} setValues={setValues}/>,
            id:3
        },
        {
            title:"Direcciones",
            content:<InformacionDirecciones values={values} setValues={setValues}/>,
            id:4
        }
    ];



    return (
        <div className="RegisterForm">

            <Modal 
                isOpen={isOpen} 
                onClose={onClose}
                size="lg"
            >
                <ModalContent>
                    <ModalHeader>
                        <h2 className="font-bold text-2xl">Quieres realmente registrar al provedor?</h2>
                    </ModalHeader>
                    <ModalFooter>
                        <Button color="danger" onClick={() => {
                            onClose();
                        }}>Volver atras</Button>
                        <Button color="primary" onClick={() => {
                            onClose();
                            handleAddNewProvedor();
                        }}>Registrar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            
            <div className="descriptionContent">
                <h1 className="text-4xl font-extrabold">Registrar provedor</h1>
                <p className="text-gray-500 text-xl mt-2">Ingresa la informacion del provedor en el <b>sistema</b></p>

                <p className="text-gray-500 text-sm mt-10">Con un nuevo provedor en el sistema podras empezar a asociar <b>productos</b>,<b>pedidos</b> y mucho mas!</p>
            </div>

            <div className="contentForm">
                <Steps current={current} items={steps}/>
                <div className="registerContent">{steps[current].content}</div>

                <div className="mt-3">
                    {current > 0 && (
                        <Button color="primary" style={{ margin: '0 8px' }} onClick={() => setCurrent(current-1)}>Anterior</Button>
                    )}
                    {current < steps.length - 1 && ( 
                        <Button color="primary" onClick={() => setCurrent(current+1)}> Siguiente</Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button color="primary" onClick={onOpen}>Terminar</Button>
                    )}
                </div>

            </div>
        </div>
    );

}