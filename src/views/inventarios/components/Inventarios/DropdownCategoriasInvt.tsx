import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { FaChevronDown } from "react-icons/fa";
import useInventarios from "../../hooks/useInventarios";

export default function DropdownCategorias(){

    const {
        categorias,
        isLoadingCategorias,
        errorCategorias,
        
        categoriasInventarioFilter,
        handleChangeCategoriaInventarioFilter
    } = useInventarios();

    console.log(
        categoriasInventarioFilter,
    );
    
    if(isLoadingCategorias) return <h1>Cargando...</h1>
    return (
        <Dropdown>
             <DropdownTrigger className="sm:flex">
                <Button endContent={<FaChevronDown  className="text-small" />} variant="flat">Categorias</Button>
            </DropdownTrigger>
            <DropdownMenu
                    aria-label="Categorias options"
                    disallowEmptySelection
                    closeOnSelect={false}
                    // @ts-ignore
                    selectedKeys={categoriasInventarioFilter}
                    selectionMode="multiple"
                    // @ts-ignore
                    onSelectionChange={
                        handleChangeCategoriaInventarioFilter
                    }
            >
                {categorias.categorias.map((categoria:any) => (
                    <DropdownItem key={categoria.id}>{categoria.nombre}</DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );

}