import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ChevronDownIcon } from "../icons/ChevronDownicon";

import { capitalize } from "../../../utils";

import useInventarios from "../hooks/useInventarios";

export default function DropdownStatusInvt(){

    const {
        statusInventarioFilter,
        handleChangeStatusInventarioFilter,
        STATUS_OPTIONS
    } = useInventarios();


    return (
        <Dropdown>
             <DropdownTrigger className="sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">Estatus</Button>
            </DropdownTrigger>
            <DropdownMenu
                    aria-label="Status options"
                    disallowEmptySelection
                    closeOnSelect={false}
                    // @ts-ignore
                    selectedKeys={statusInventarioFilter}
                    selectionMode="multiple"
                    // @ts-ignore
                    onSelectionChange={handleChangeStatusInventarioFilter}
            >
                {STATUS_OPTIONS.map((status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                        {capitalize(status.name)}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}