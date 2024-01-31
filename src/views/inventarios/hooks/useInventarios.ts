import { useMemo, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

interface StatusOption{
    uid:number;
    name:string;
};
const STATUS_OPTIONS:StatusOption[] = [
    {
        name:"activo",
        uid:1
    },
    {
        name:"finalizado",
        uid:2
    }
];

export default function useInventarios() {

    const [ filterValue,setFilterValue ] = useState("");
    const [ statusInventarioFilter,setStatusInventarioFilter ] = useState<Set<StatusOption>>();
    const [ categoriasInventarioFilter,setCategoriasInventarioFilter ] = useState<Set<any>>();
    const { data:dataCategorias,isLoading:isLoadingCategorias,error:errorCategorias } = useFetch("categorias");
    const { data:dataInventarios,isLoading:isLoadingInventarios,error:errorInventarios } = useFetch("inventarios");
    const [ inventarioSelected,setInventarioSelected ] = useState<any>(null);

    const handleChangeStatusInventarioFilter = (newStatus:Set<StatusOption>) => {
        const newSet = new Set(newStatus);
        setStatusInventarioFilter(newSet);
    }

    const handleChangeCategoriaInventarioFilter = (newCategorias:Set<any>) => {
        const newSet = new Set(newCategorias);
        setCategoriasInventarioFilter(newSet);
    }

    const handleChangeInventarioSelected = (inventario:any) => {
        setInventarioSelected({...inventario});
    }

    const filteredInventarios = useMemo(() => {

        if(dataInventarios === null) return [];

        let filteredInventarios = [...dataInventarios.inventarios];

        if(filterValue){
            filteredInventarios = filteredInventarios.filter(inventario => inventario.nombre_inventario.toLowerCase().includes(filterValue.toLowerCase()));
        }

        // if(statusInventarioFilter){
        //     filteredInventarios = filteredInventarios.filter(inventario => inventario.estatus)
        // }

        // if(categoriasInventarioFilter){
        //     filteredInventarios = 
        // }

        return filteredInventarios;

    },[dataInventarios,filterValue,statusInventarioFilter,categoriasInventarioFilter]);

    return {
        filterValue,
        setFilterValue,

        STATUS_OPTIONS,
        statusInventarioFilter,
        handleChangeStatusInventarioFilter,

        categorias:dataCategorias,
        isLoadingCategorias,
        errorCategorias,
        categoriasInventarioFilter,
        setCategoriasInventarioFilter,
        handleChangeCategoriaInventarioFilter,

        isLoadingInventarios,
        filteredInventarios,

        inventarioSelected,
        setInventarioSelected,
        handleChangeInventarioSelected
    };

};