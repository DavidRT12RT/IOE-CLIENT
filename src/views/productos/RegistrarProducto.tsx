import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { Steps } from "antd";

//Custom hook
import { useRegistrarProducto } from "./hooks/useRegistrarProducto";

//Component's
import InformacionBasica from "./components/RegistrarProducto/InformacionBasica";
import InformacionDeCompra from "./components/RegistrarProducto/InformacionDeCompra";
import InformacionSat from "./components/RegistrarProducto/InformacionSat";
import ProvedoresProducto from "../provedores/components/RegistrarProvedor/ProvedoresProducto";
import AlmacenesProducto from "./components/RegistrarProducto/AlmacenesProducto";

import "./assets/RegistrarProducto.css";

export default function RegistrarProducto (){

    const {
        values,
        setValues,
        handleChange,
        current,
        next,
        prev,

        dataCategorias,
        dataAlmacenes,
        dataProductos,
        dataSucursales,
        dataProvedores,
        dataSatClaves,
        dataSatUnidades,

        // isLoadingSucursales,
        isLoadingAlmacenes,
        isLoadingProvedores,
        isLoadingCategorias,
        isLoadingProductos,
        isLoadingClavesSat,
        isLoadingUnidadesSat,
        
        errorCategorias,
        errorAlmacenes,
        errorProductos,
        errorProvedores,
        errorClavesSat,
        errorUnidadesSat,

        handleRegisterProducto
    } = useRegistrarProducto();


    const steps = [
        {
            title:"Informacion basica del producto",
            content:<InformacionBasica values={values} handleChange={handleChange} categorias={dataCategorias?.categorias} />,
            id:1
        },
        {
            title:"Almacenes del producto",
            content:<AlmacenesProducto values={values} setValues={setValues} sucursales={dataSucursales?.sucursales}/>,
            id:2
        },
        {
            title:"Provedores del producto",
            content:<ProvedoresProducto values={values} setValues={setValues} provedores={dataProvedores?.provedores}/>,
            id:10
        },
        {
            title:"Informacion de compra",
            content:<InformacionDeCompra values={values} handleChange={handleChange}/>,
            id:3
        },
        {
            title:"Informacion del SAT",
            content:<InformacionSat values={values} handleChange={handleChange} clavesSat={dataSatClaves?.clavesSat} unidadesMedidaSat={dataSatUnidades?.unidadesMedidaSat}/>,
            id:4
        },
        // {
        //     title:"Detalles del producto",
        //     content:<InformacionDetallada values={values} setValues={setValues} handleChange={handleChange} productos={dataProductos?.productos}/>,
        //     id:5
        // },
    ];

    const { isOpen: isOpenModalRegistrar, onOpen: onOpenModalRegistrar,onClose:onCloseModalRegistrar } = useDisclosure();

    if(isLoadingCategorias || isLoadingAlmacenes || isLoadingProductos || isLoadingProvedores) return <h1>Cargando...</h1>
    if(errorAlmacenes || errorCategorias || errorProductos || errorProvedores || errorClavesSat || errorUnidadesSat) return <p>Categorias o almacenes no se pudieron extraer del servidor , contacta a un administrador!</p>;
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
            <div className="descriptionContent">
                <h1 className="text-4xl font-extrabold">Registrar producto</h1>
                <p className="text-gray-500 text-xl mt-2">Ingresa la informacion del producto en el <b>sistema</b></p>

                <p className="text-gray-500 text-sm mt-10">Crear un producto en el sistema y asocia los <b>provedores</b> los <b>almacenes</b> y la categoria. </p>
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
