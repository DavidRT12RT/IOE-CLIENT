import { Button,Input } from "@nextui-org/react";
import { Link } from "react-router-dom";

//Component's
import DropdownStatusInvt from "./DropdownStatusInvt";
import DropdownCategorias from "./DropdownCategoriasInvt";

//Icon's
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";


interface InvtFinderProps {
    filterValue:any;
    setFilterValue:any;
};

export const InvtFinder  = ({filterValue,setFilterValue}:InvtFinderProps) => {

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-5xl lg:text-4xl font-extrabold">Inventarios</h1>
            <Input
                isClearable
                placeholder="Busca por nombre del inventario"
                startContent={<CiSearch/>}
                value={filterValue}
                onClear={() => setFilterValue("")}
                onValueChange={setFilterValue}
            />
            <div className="flex gap-3">
                <DropdownStatusInvt/>
                <DropdownCategorias/>
                <Link to={'/almacen/inventarios/registrar'}><Button color="primary" endContent={<IoMdAdd />}>Crear nuevo</Button></Link>
            </div>
        </div>
    );

};