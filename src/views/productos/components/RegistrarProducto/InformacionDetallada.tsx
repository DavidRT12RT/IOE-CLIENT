import { Card, Input, Modal, ModalBody, ModalContent,ModalHeader, useDisclosure } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import { Categoria, categoriasPrueba } from "../../data";

export default function InformacionDetallada(){

    const { isOpen: isOpenModalCategorias,onOpen: onOpenModalCategorias,onOpenChange: onOpenChangeModalCategorias } = useDisclosure();
    const { isOpen: isOpenModalAlmacenes,onOpen: onOpenModalAlmacenes,onOpenChange: onOpenChangeModalAlmacenes } = useDisclosure();


    const Result = ({categoria}:{categoria:Categoria}) => {

        return (
            <div className="resultContainer">
                <div className="flex items-center gap-2">
                    <CiSearch className="text-2xl"/>
                    <p>{categoria.nombre}</p>
                </div>
                <IoIosArrowForward/>
            </div>
        );

    }

    const ModalCategorias = () => {
        return (
            <Modal 
                size="lg"
                isOpen={isOpenModalCategorias} 
                onOpenChange={onOpenChangeModalCategorias}
                hideCloseButton
                style={{padding:0}}
                // backdrop="transparent"
            >
                <ModalContent>
                    {(onClose) => (
                        <div>
                                <ModalHeader style={{padding:0}}>
                                    <Input
                                        disableAnimation
                                        variant="underlined"
                                        size="lg"
                                        className="font-extrabold text-3xl"
                                        startContent={
                                            <p className="font-extrabold"><CiSearch/></p>
                                        }
                                        isClearable
                                        placeholder="Buscar categoria"
                                    />
                                </ModalHeader>
                                <ModalBody>
                                    {
                                        categoriasPrueba.map(categoria => <Result categoria={categoria} key={categoria.id}/>)
                                    }
                                </ModalBody>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        );
    }

    const ModalAlmacen = () => {
        return (
            <Modal 
                isOpen={isOpenModalAlmacenes} 
                onOpenChange={onOpenChangeModalAlmacenes}
                hideCloseButton
                style={{padding:0}}
                backdrop="transparent"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="font-extrabold text-3xl"  style={{padding:"0px"}}>
                                    <Input
                                        startContent={
                                            <p><CiSearch/></p>
                                        }
                                        isClearable
                                        placeholder="Buscar almacen"
                                    />
                            </ModalHeader>
                            <ModalBody>
                                <h3>Recent</h3>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        );
    }

    return (
        <>
            <ModalCategorias/>
            <ModalAlmacen/>
            <Input
                isRequired
                size="md"
                name="categoria"
                label="Categoria"
                onClick={() => onOpenModalCategorias() }
            />
            <Input
                isRequired
                size="md"
                name="almacen"
                label="Almacen"
                onClick={() => onOpenModalAlmacenes()}
            />

            {/* <Checkbox
                style={{alignSelf:"self-start"}}
                type="primary"
                name="producto_padre"
                aria-label="Producto padre"
            >
                Producto padre
            </Checkbox> */}

        </>
    );


}