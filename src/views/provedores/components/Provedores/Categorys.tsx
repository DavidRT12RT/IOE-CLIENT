import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";


export default function Categorys(){

    return (
        <div className="optionsAndCategorys">
            <Link to={`/almacen/provedores/registrar`}><Button color="primary" startContent={<IoIosAdd/>}>Registrar provedor</Button></Link>
            <div className="flex items-center mt-3 gap-3">
                <Dropdown>
                    <DropdownTrigger><Button size="md" endContent={<IoIosArrowDown/>}>Filter</Button></DropdownTrigger>
                    <DropdownMenu aria-label="Filtros">
                        <DropdownItem></DropdownItem> 
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );

}