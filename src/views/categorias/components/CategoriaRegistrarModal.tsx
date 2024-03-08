import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";
import { useCategorias } from '../context/CategoriasProvider';

export default function CategoriaRegistrarModal(){


    const {
        categorias,
        handleRegisterNewCategoria,

        isOpenModalRegister,
        onOpenChangeModalRegister,
        onCloseModalRegister,

        valuesNewCategoria,
        handleChangeNewCategoria
    } = useCategorias();


    return (            
        <Modal isOpen={isOpenModalRegister} onOpenChange={onOpenChangeModalRegister} onClose={onCloseModalRegister}>
            <ModalContent>
                <ModalHeader><h2 className="font-bold text-2xl">Crear nueva categoria</h2></ModalHeader>
                <ModalBody>
                    <Input
                        name="nombre"
                        placeholder="Nombre categoria"
                        value={valuesNewCategoria.nombre}
                        onChange={handleChangeNewCategoria}
                    />
                    <Input
                        name="descripcion"
                        placeholder="Descripcion de la categoria"
                        value={valuesNewCategoria.descripcion}
                        onChange={handleChangeNewCategoria}
                    />
                    <Select
                        name="categoria_padre"
                        label="Categoria padre"
                        // @ts-ignore
                        value={[valuesNewCategoria.categoria_padre]}
                        //@ts-ignore
                        onChange={handleChangeNewCategoria}
                    >
                        {categorias.map(categoria => (
                            <SelectItem key={categoria.id} textValue={categoria.nombre} value={categoria.id}>{categoria.nombre}</SelectItem>
                        ))}
                    </Select>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleRegisterNewCategoria}>Crear</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );

}