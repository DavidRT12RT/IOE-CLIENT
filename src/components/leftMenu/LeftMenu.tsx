import { useState } from "react";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

//Icons
import { MdOutlineInventory } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


//Redux
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

import "./assets/style.css";


export default function LeftMenu() {

    const [ isOpen,setIsOpen ] = useState(false);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <nav className={"LeftMenu " + (isOpen ? "isOpen" : "")}>
            {/* <div className="modules">
                <p className="icon"><MdOutlineInventory/></p>
            </div>
            <div className="options">
                <Dropdown>
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="primary"
                            name="Jason Hughes"
                            size="sm"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Logeado como</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="settings">Configuraciones</DropdownItem>
                        <DropdownItem key="analytics" onClick={handleLogout}>Cerrar seccion</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <p className="icon" onClick={() => setIsOpen(!isOpen)}><IoIosArrowForward/></p>
            </div> */}
        </nav>
    );

}