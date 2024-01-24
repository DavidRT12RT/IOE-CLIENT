import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from "@nextui-org/react";
//Icons
import { SearchIcon } from "../icons/SearchIcon";
import { ChevronDownIcon } from "../icons/ChevronDownicon";
import { PlusIcon } from "../icons/PlusIcon";
import { columns, statusOptions } from "../data";
import { capitalize } from "../../../utils";
import useInventarios from "../../../hooks/useInventarios";


export const InvtFinder  = () => {

    const {
        filterValue,
        setFilterValue,
        onSearchChange,

        statusFilter,
        setStatusFilter,

        visibleColumns,
        setVisibleColumns
    } = useInventarios();

    return (
        <div className="flex flex-col gap-4 w-full">
            <Input
                isClearable
                placeholder="Busca por nombre"
                startContent={<SearchIcon/>}
                value={filterValue}
                onClear={() => setFilterValue("")}
                onValueChange={onSearchChange}
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
                            selectionMode="multiple"
                            onSelectionChange={setStatusFilter}
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
                        selectedKeys={visibleColumns}
                        selectionMode="multiple"
                        onSelectionChange={setVisibleColumns}
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