import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { CiViewTable } from "react-icons/ci";
import { FaBoxesStacked } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { typeOfVisibleDataProductos } from "../../hooks/useProductos";

interface CategorysProps{
    typeOfVisible:string;
    setTypeOfVisible:any;
};

export default function Categorys({typeOfVisible,setTypeOfVisible}:CategorysProps){

    return (
        <div className="optionsAndCategorys">
            <Link to={`/almacen/productos/registrar`}><Button color="primary" startContent={<IoIosAdd/>}>Registrar producto</Button></Link>
            <div className="flex items-center mt-3 gap-3">
                <Dropdown>
                    <DropdownTrigger><Button size="md" endContent={<IoIosArrowDown/>}>Filter</Button></DropdownTrigger>
                    <DropdownMenu aria-label="Filtros">
                        <DropdownItem></DropdownItem> 
                    </DropdownMenu>
                </Dropdown>
                <div className="boxContainer">

                    <Button 
                        onClick={() => setTypeOfVisible(typeOfVisibleDataProductos.Boxes)}
                        className={typeOfVisible === typeOfVisibleDataProductos.Boxes ? "font-bold" : "font-normal"}
                        size="md" 
                        style={{
                            borderRadius:"0px",
                            fontSize:"20px",
                            borderTopLeftRadius:"10px",
                            borderBottomLeftRadius:"10px"
                        }}
                    >
                        <FaBoxesStacked/>
                    </Button>
                    <Button 
                        onClick={() => setTypeOfVisible(typeOfVisibleDataProductos.Table)}
                        className={typeOfVisible === typeOfVisibleDataProductos.Table ? "font-bold" : "font-normal"}
                        size="md" 
                        style={{
                            borderRadius:"0px",
                            fontSize:"20px",
                            borderTopRightRadius:"10px",
                            borderBottomRightRadius:"10px"
                        }}
                    >
                        <CiViewTable/>
                    </Button>
                </div>
            </div>
        </div>
    );

}