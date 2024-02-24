import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Steps } from "antd";

//Component's
import InformacionBasica from "./components/RegistrarInventario/InformacionBasica";
import InformacionDetallada from "./components/RegistrarInventario/InformacionDetallada";

//Hook's
import useRegistrarInventario from "./hooks/useRegistrarInventario";

//CSS
import "./assets/RegistrarInventario.css";

export default function RegistrarInventario (){

    const { 
        values,
        handleChange,
        setValues,

        current,
        next,
        prev,

        handleRegisterInventario,

        empleados,
        isLoadingEmpleados,

        productos,
        isLoadingProductos,

        categorias,
        isLoadingCategorias,

        sucursales,
        isLoadingSucursales
    } = useRegistrarInventario();

    const { isOpen: isOpenModalRegistrar, onOpen: onOpenModalRegistrar,onClose:onCloseModalRegistrar } = useDisclosure();

    const steps = [
        {
            title:"Informacion basica del inventario",
            content:(
            <InformacionBasica 
                empleados={empleados} 
                values={values} 
                handleChange={handleChange} 
                setValues={setValues}
            />),
            id:1
        },
        {
            title:"Informacion detallada del inventario",
            content:(
            <InformacionDetallada 
                sucursales={sucursales}
                categorias={categorias} 
                productos={productos} 
                values={values} 
                setValues={setValues}
                handleChange={handleChange}
            />),
            id:2
        },
    ];


    if(isLoadingEmpleados || isLoadingProductos || isLoadingCategorias || isLoadingSucursales) return <h1>Cargando informacion de la base de datos</h1>
    return (
        <section className="registerContainer">
            <Modal 
                isOpen={isOpenModalRegistrar} 
                onOpenChange={onOpenModalRegistrar} 
                onClose={onCloseModalRegistrar}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>Estas seguro?</ModalHeader>
                            <ModalBody>Al registrar este inventario este se relacionara en la base de datos y no habra vuelta atras</ModalBody>
                            <ModalFooter>
                                <Button onPress={onClose}>Volver atras</Button>
                                <Button color="primary" onPress={() => {
                                    onClose();
                                    handleRegisterInventario();
                                }}>Registrar inventario</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <div className="descriptionContent">
                <h2 className="text-4xl font-extrabold">Registrar inventario</h2>
                <p className="text-gray-500 text-xl mt-2">Ingresa la informacion del <b>inventario</b></p>

                <p className="text-gray-500 text-sm mt-10">Crear un inventario en el sistema y empieza a ajustar <b>articulos</b>.</p>
            </div>
            <div className="contentForm">
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
            </div>
        </section>
    );
}
