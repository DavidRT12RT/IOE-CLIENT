import { IoIosArrowRoundForward } from "react-icons/io";
import TableProductos, { SelectionMode } from "../../productos/components/Productos/TableProductos";
import { Link } from "react-router-dom";
import { Button, Tab, Tabs } from "@nextui-org/react";
import CategoriaDetails from "./CategoriaDetails";
import { useCategorias } from "../context/CategoriasProvider";



export default function CategoriaSelected(){

    const {
        categoriaSelected,

        selectedProducts,
        setSelectedProducts,

        handleEditCategoriaSelected
    } = useCategorias();


    return (
        <div className="categoriaSelected">
            <div className="flex justify-between items-centerk pb-2">
                <div>
                    <h3 className="font-extrabold text-3xl">{categoriaSelected?.nombre}</h3> 
                    {/* @ts-ignore */}
                    <p className="text-gray-500">{categoriaSelected?.descripcion?.length >= 1 ? categoriaSelected?.descripcion : "Usa esta seccion para anadir o quitar productos a la categoria actual seleccionada." }</p>
                </div>
                <div className="flex place-items-center gap-2">
                    <IoIosArrowRoundForward style={{fontSize:"25px"}}/>
                    <Link to={`/almacen/productos`} target="_blank"><p className="font-extrabold">Buscar</p></Link>
                </div>
            </div>

            <div className="my-2 gap-3 flex">
                {
                    selectedProducts.size === 0 ? <Button color="primary">Agregar productos a categoria</Button> : <Button color="danger" onClick={handleEditCategoriaSelected}>Desvincular productos seleccionados</Button>
                }
            </div>
            <Tabs aria-label="Options">
                <Tab key="productos" title="Productos">
                    {
                        categoriaSelected?.productos != null && 
                        <TableProductos 
                            productos={categoriaSelected.productos} 
                            extraStyles={{marginTop:"10px",minHeight:"100%"}} 
                            showInputBar 
                            selectionMode={SelectionMode.multiple}
                            selectedKeys={selectedProducts}
                            setSelectedKeys={setSelectedProducts}
                        />
                    }
                </Tab>
                <Tab key="informacion" title="Informacion">
                    <CategoriaDetails />
                </Tab>
            </Tabs>
        </div>
    );

}