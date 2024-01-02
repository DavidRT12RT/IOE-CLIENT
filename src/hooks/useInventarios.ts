import { useCallback, useMemo, useState } from "react";
import { columns, statusOptions, users } from "../views/inventarios/data";
import { SortDescriptor } from "@nextui-org/react";
import { User } from "../types/user.ds";

export default function useInventarios() {

    const INITIAL_VISIBLE_COLUMNS = ["name","role","status","actions"];

    const [ filterValue,setFilterValue ] = useState("");
    const [ selectedKeys,setSelectedKeys ] = useState<Selection | string>("");
    const [ visibleColumns,setVisibleColumns ] = useState<Set<String> | string>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [ statusFilter,setStatusFilter ] = useState<string[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({column: "age",direction: "ascending",});
    const [page, setPage] = useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = useMemo(() => {
        if(visibleColumns === "all") return columns;
        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    },[visibleColumns]);

    const filteredItems = useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }

        if(statusFilter.length > 0){
            filteredUsers = filteredUsers.filter(user => {
                statusFilter.includes(user.status)
            });
        }

        return filteredUsers;
    },[users,filterValue,statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = useMemo(() => {

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);

    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {

        return [...items].sort((a: User, b: User) => {
            const first = a[sortDescriptor.column as keyof User] as number;
            const second = b[sortDescriptor.column as keyof User] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;
            return sortDescriptor.direction === "descending" ? -cmp : cmp;});

    }, [sortDescriptor, items]);
    
    const onNextPage = useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);


    const onClear = useCallback(()=>{
        setFilterValue("")
        setPage(1)
    },[])

    return {
        headerColumns,
        sortedItems,

        statusFilter,
        setStatusFilter
    };

};