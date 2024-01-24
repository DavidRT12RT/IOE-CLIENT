import { useCallback, useMemo } from "react";

//Nextui
import { Button, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";

//Icons
import { VerticalDotsIcon } from "../icons/VerticalDotsIcon";

//Info local
import { statusColorMap, users } from "../data";

//Custom hook to implement logic
import useInventarios from "../../../hooks/useInventarios";


export const InvtResults = () => {

    type User = typeof users[0];

    const { 
        items,        
        page,
        pages,

        sortedItems,
        headerColumns,

        sortDescriptor,
        setSortDescriptor,

        selectedKeys,
        setSelectedKeys,

        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        hasSearchFilter,
        setPage
    } = useInventarios();


    const renderCell = useCallback((user: User, columnKey: React.Key) => {        
        const cellValue = user[columnKey as keyof User];
        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{radius: "lg", src: user.avatar}}
                        description={user.email}
                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-small capitalize">{cellValue}</p>
                        <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
                    </div>
                );
            case "status":
                return (<Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">{cellValue}</Chip>);
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem>Ver mas info</DropdownItem>
                                <DropdownItem>Borrar</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, [sortedItems]);


    // const topContent = useMemo(() => {            
    //     return (
    //         <div className="flex flex-col gap-4">
    //             <div className="flex justify-between items-center">
    //             <span className="text-default-400 text-small">Total {users.length} usuarios</span>
    //             <label className="flex items-center text-default-400 text-small">
    //                 Filas por pagina:
    //                 <select
    //                 className="bg-transparent outline-none text-default-400 text-small"
    //                 onChange={onRowsPerPageChange}
    //                 >
    //                 <option value="5">5</option>
    //                 <option value="10">10</option>
    //                 <option value="15">15</option>
    //                 </select>
    //             </label>
    //             </div>
    //         </div>
    //     );
    // }, [    
    //         filterValue,
    //         statusFilter,
    //         visibleColumns,
    //         onSearchChange,
    //         onRowsPerPageChange,
    //         users.length,
    //         hasSearchFilter,
    // ]);

    // const bottomContent = useMemo(() => {
    //     return (
    //         <div className="py-2 px-2 flex justify-between items-center">
    //             <span className="w-[30%] text-small text-default-400">
    //                 {
    //                     selectedKeys === "all"
    //                         ? "All items selected"
    //                         : `${selectedKeys.size} of ${filteredItems.length} selected`
    //                 }
    //             </span>                    
    //             <Pagination                        
    //                 isCompact
    //                 showControls
    //                 showShadow
    //                 color="primary"
    //                 page={page}
    //                 total={pages}
    //                 onChange={setPage}
    //             />                        
    //                 <div className="hidden sm:flex w-[30%] justify-end gap-2">
    //                     <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>Previo</Button>
    //                     <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>Siguiente</Button>
    //                 </div>
    //         </div>
    //     );
    // }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    return (            
        <Table
            shadow="none"
            aria-label="Tabla de inventarios existentes"
            isHeaderSticky
            // bottomContent={bottomContent}
            bottomContentPlacement="outside"
            selectionMode="multiple"
            // topContent={topContent}
            topContentPlacement="outside"
            className="mt-3"
            sortDescriptor={sortDescriptor}
            onSortChange={setSortDescriptor}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >                
            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={sortedItems}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
};