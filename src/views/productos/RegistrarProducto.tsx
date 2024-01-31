import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Steps, message } from "antd";

//Custom hook
import { useRegistrarProducto } from "./hooks/useRegistrarProducto";

//Component's
import InformacionBasica from "./components/RegistrarProducto/InformacionBasica";
import InformacionDetallada from "./components/RegistrarProducto/InformacionDetallada";
import Archivos from "./components/RegistrarProducto/Archivos";

import "./assets/RegistrarProducto.css";

export default function RegistrarProducto (){

    const {
        values,
        current,
        next,
        prev,

        dataCategorias,
        dataAlmacenes,
        dataProductos,
        isLoadingAlmacenes,
        isLoadingCategorias,
        isLoadingProductos,
        
        errorCategorias,
        errorAlmacenes,
        errorProductos,

        handleRegisterProducto
    } = useRegistrarProducto();


    const steps = [
        {
            title:"Informacion basica del producto",
            content:<InformacionBasica/>,
            id:1
        },
        {
            title:"Informacion detallada del producto",
            content:<InformacionDetallada categorias={dataCategorias?.categorias} almacenes={dataAlmacenes?.almacenes} productos={dataProductos?.productos}/>,
            id:2
        },
        {
            title:"Fotos del producto",
            content:<Archivos/>,
            id:3
        },
        {
            title:"Resumen",
            // content:<Archivos/>,
            id:4
        },
    ];

    const { isOpen: isOpenModalRegistrar, onOpen: onOpenModalRegistrar,onClose:onCloseModalRegistrar } = useDisclosure();

    if(isLoadingCategorias || isLoadingAlmacenes || isLoadingProductos ) return <h1>Cargando...</h1>
    if(errorAlmacenes || errorCategorias || errorProductos ) return <p>Categorias o almacenes no se pudieron extraer del servidor , contacta a un administrador!</p>;
    return (
        <section className="registerContainer">
            <Modal isOpen={isOpenModalRegistrar} onOpenChange={onOpenModalRegistrar} onClose={onCloseModalRegistrar}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Estas seguro?</ModalHeader>
                            <ModalBody>Al registrar este producto este se relacionara en la base de datos y no habra vuelta atras</ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose}>Volver atras</Button>
                                <Button color="primary" onPress={() => {
                                    handleRegisterProducto();
                                    onClose();
                                }}>Registrar producto</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <h1 className="font-extrabold text-3xl lg:text-6xl font-playfair">Registrar un producto</h1>
            <p className="text-gray-500">Llenar los siguientes datos para registrar un nuevo producto a almacen.</p>
            <Steps current={current} items={steps}/>
            <div className="registerContent">{steps[current].content}</div>
            <div className="mt-3">
                {current > 0 && (
                    <Button color="primary" style={{ margin: '0 8px' }} onClick={() => prev()}>Anterior</Button>
                )}
                {current < steps.length - 1 && ( 
                    <Button color="primary" onClick={() => next()}> Siguiente</Button>
                )}
                {current === steps.length - 1 && (
                    <Button color="primary" onClick={onOpenModalRegistrar}>Terminar</Button>
                )}
            </div>
        </section>
    );
}
