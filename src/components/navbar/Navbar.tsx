import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Link, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Navbar } from "@nextui-org/react"
import { SearchIcon } from "../../views/inventarios/icons/SearchIcon";

export default function NavbarMenu(){

    return (
        <Navbar isBordered maxWidth="full">
            <NavbarBrand>
                <p className="text-3xl font-extrabold">IOE Cliente</p>
            </NavbarBrand>
            <NavbarContent as="div" className="items-center" justify="end">
                <Input                        
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] md:max-w-[20rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Busca informacion en el sistema..."
                    size="sm"
                    startContent={<SearchIcon />}
                    type="search"
                />
                <Dropdown placement="bottom-end">
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
                        <DropdownItem key="analytics">Cerrar seccion</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );

};