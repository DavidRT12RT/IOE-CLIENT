import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
//Icons
import { SearchIcon } from "../icons/SearchIcon";
import { PlusIcon } from "../icons/PlusIcon";
import useInventarios from "../hooks/useInventarios";
import { capitalize } from "../../../utils";
import DropdownStatusInvt from "./DropdownStatusInvt";
import DropdownCategorias from "./DropdownCategoriasInvt";

interface InvtFinderProps {
    filterValue:any;
    setFilterValue:any;
};

export const InvtFinder  = ({filterValue,setFilterValue}:InvtFinderProps) => {

    return (
        <div className="flex flex-col gap-4">
            <Input
                isClearable
                placeholder="Busca por nombre del inventario"
                startContent={<SearchIcon/>}
                value={filterValue}
                onClear={() => setFilterValue("")}
                onValueChange={setFilterValue}
            />
            <div className="flex gap-3">
                <DropdownStatusInvt/>
                <DropdownCategorias/>
                <Button color="primary" endContent={<PlusIcon />}>Crear nuevo</Button>
            </div>
        </div>
    );

};