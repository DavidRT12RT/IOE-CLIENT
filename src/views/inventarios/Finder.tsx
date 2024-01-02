import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
//Icons
import { SearchIcon } from "./SearchIcon";
import { ChevronDownIcon } from "./ChevronDownicon";
import { PlusIcon } from "./PlusIcon";
import { columns, statusOptions } from "./data";
import { capitalize } from "../../utils";
import useInventarios from "../../hooks/useInventarios";


export const Finder  = () => {

    const {
        statusFilter,
        setStatusFilter
    } = useInventarios();

    return (
        <div className="flex flex-col gap-4 w-full">
            <Input
                isClearable
                placeholder="Search by name..."
                startContent={<SearchIcon/>}
            />
            <div className="flex gap-3">
                <Dropdown>
                    <DropdownTrigger className="sm:flex">
                        <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">Estatus</Button>
                    </DropdownTrigger>
                    <DropdownMenu
                            disallowEmptySelection
                            aria-label="Table Columns"
                            closeOnSelect={false}
                            selectedKeys={statusFilter}
                            // onSelectionChange={(e) => }
                            selectionMode="multiple"
                    >
                        {statusOptions.map((status) => (
                            <DropdownItem key={status.uid} className="capitalize">
                                {capitalize(status.name)}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownTrigger className="sm:flex">
                        <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">Columnas</Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Table Columns"
                        closeOnSelect={false}
                        // selectedKeys={visibleColumns}
                        selectionMode="multiple"
                        // onSelectionChange={setVisibleColumns}
                    >
                        {columns.map((column) => (
                            <DropdownItem key={column.uid} className="capitalize">
                                {capitalize(column.name)}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </Dropdown>
                <Button color="primary" endContent={<PlusIcon />}>Crear nuevo</Button>
            </div>
        </div>
    );

};