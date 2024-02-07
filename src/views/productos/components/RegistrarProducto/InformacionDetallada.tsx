import React, { memo, useMemo, useState } from "react";
import { Checkbox, Input, Modal, ModalBody, ModalContent, ModalHeader, Select, SelectItem, SelectSection, useDisclosure } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";



interface InformacionDetalladaPros {
    values:any;
    setValues:any;
    categorias: any;
    productos:any;
    sucursales:any;
    almacenes:any;
}

interface ModalResultsProps {
  isOpenModal: boolean;
  onOpenChangeModal: () => void;
  onClose:() => void;
  filterValue: string;
  setFilterValue: React.Dispatch<React.SetStateAction<string>>;
  filteredResults: any[]; // Adjust the type accordingly
  setValues:(values:any) => void;
  type:string;
}

const ModalResults = memo(({
    isOpenModal,
    onOpenChangeModal,
    onClose,
    filterValue,
    setFilterValue,
    filteredResults,
    setValues,
    type,
}:ModalResultsProps) => {

    const ResultCard = ({ result }: { result: any}) => {

        const handleSetResult = () => {
            setValues((values:any) => ({
                ...values,
                [type]:result
            }));
            setFilterValue("");
            onClose();
        }

        return (
            <div className="resultContainer bg-bkg-color" onClick={handleSetResult}>
                <div className="flex items-center gap-3">
                    <CiSearch className="text-3xl" />
                    <p>{result?.nombre}</p>
                </div>
                <IoIosArrowForward />
            </div>
        );
    };

    return (
        <Modal
            size="lg"
            isOpen={isOpenModal}
            onClose={onClose}
            onOpenChange={onOpenChangeModal}
            hideCloseButton
            isDismissable
            style={{ padding: -1 }}
            scrollBehavior="inside"
        >
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader style={{ padding: -1 }}>
                            <Input
                                autoFocus
                                // variant="underlined"
                                size="lg"
                                className="font-extrabold text-4xl"
                                startContent={
                                    <p className="font-extrabold"><CiSearch /></p>
                                }
                                isClearable
                                placeholder="Buscar "
                                value={filterValue}
                                // onValueChange={setFilterValue}
                                onChange={({target}) => {
                                    const { value } = target;
                                    setFilterValue(value);
                                }}
                                onClear={() => setFilterValue("")}
                            />
                        </ModalHeader>
                        <ModalBody>
                            {
                                filteredResults.length > 0
                                ? filteredResults.map(result => <ResultCard result={result} key={result.id}/>)
                                : <p>Ningun resultado encontrado...</p>
                            }
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
},(prevProps, nextProps) => {
    // Memoization: Only re-render if isOpenModalCategorias changes
    return prevProps.isOpenModal === nextProps.isOpenModal &&
    prevProps.filterValue === nextProps.filterValue && prevProps.filteredResults== nextProps.filteredResults;
});


export default function InformacionDetallada({
    values,
    setValues,
    categorias,
    sucursales,
    // productos
}:InformacionDetalladaPros){


    const { isOpen: isOpenModalCategorias, onOpen: onOpenModalCategorias,onClose:onCloseCategorias } = useDisclosure();
    // const { isOpen: isOpenModalProductos, onOpen: onOpenModalProductos,onClose:onCloseProductos } = useDisclosure();
    const [filterValue, setFilterValue] = useState<string>("");
    const hasSearchFilter = Boolean(filterValue);
    const filteredCategorias = useMemo(() => {

        let filteredCategorias = [...categorias];
        if (hasSearchFilter) filteredCategorias = filteredCategorias.filter(categoria => categoria.nombre.toLowerCase().includes(filterValue.toLowerCase()))
        return filteredCategorias;

    }, [filterValue,categorias]);


    // const filteredProductos = useMemo(() => {

    //     let filteredProductos = [...productos];
    //     if(hasSearchFilter) filteredProductos = filteredProductos.filter(almacen => almacen.nombre.toLowerCase().includes(filterValue.toLowerCase()));
    //     return filteredProductos;

    // },[filterValue,productos]);

    return (
        <>
            <ModalResults
                isOpenModal={isOpenModalCategorias}
                onOpenChangeModal={onOpenModalCategorias}
                onClose={onCloseCategorias}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                filteredResults={filteredCategorias}
                setValues={setValues}
                type="categoria"
            />
            {/* <ModalResults
                isOpenModal={isOpenModalProductos}
                onOpenChangeModal={onOpenModalProductos}
                onClose={onCloseProductos}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                filteredResults={filteredProductos}
                setValues={setValues}
                type="producto_padre"
            /> */}
            <Input
                isRequired
                size="md"
                name="categoria"
                label="Categoria"
                onClick={() => onOpenModalCategorias()}
                value={values.categoria?.nombre}
                contentEditable={false}
            />
             <Select
                label="Almacenes de las sucursales"
                placeholder="Selecciona una o varios almacenes donde estara el producto"
                selectionMode="multiple"
                selectedKeys={values.almacenes}
                //@ts-ignore
                onSelectionChange={(e) => setValues((values) => ({...values,almacenes:[...Array.from(e)]}))}
            >
                {
                    sucursales.map((sucursal:any) => (
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
            <Checkbox 
                type="primary"
                isSelected={values.inventariable}
                onChange={() => setValues((values:any) => ({...values,inventariable:!values.inventariable}))}
            >
                Inventariable
            </Checkbox>
            {/* <Checkbox 
                type="primary"
                checked={values.es_producto_padre} 
                onChange={(e) => setValues(values => ({...values,es_producto_padre:!values.es_producto_padre}))}
            >
                Es producto padre
            </Checkbox>
            {values.es_producto_padre && (
                <Input
                    isRequired
                    size="md"
                    name="numero_productos_hijos"
                    label="Numero de productos hijos"
                    description="El numero de productos secundarios del mismo modelo"
                    value={values.numero_productos_hijos}
                    onChange={handleChange}
                    type="number"
                    min={1}
                />
            )}
            <Checkbox 
                type="primary"
                checked={values.es_producto_hijo} 
                onChange={(e) => setValues(values => ({...values,es_producto_hijo:!values.es_producto_hijo}))}
            >
                Es producto hijo 
            </Checkbox>
            {values.es_producto_hijo && (
                <Input
                    isRequired
                    size="md"
                    name="producto_padre"
                    label="Producto padre"
                    onClick={() => onOpenModalProductos()}
                    value={values.producto_padre.nombre.length > 1 ? values.producto_padre?.nombre : ""}
                    contentEditable={false}
                    description="El producto padre que tiene el producto que estas registrando actualmente"
                />
            )} */}
        </>
    );
}