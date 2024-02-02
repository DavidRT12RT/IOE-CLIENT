import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";

interface InitialFormValues {
    nombre_inventario:string;
    tipo_inventario:string;
    categoria?:string;
    productos?:string[];
    auxiliares_inventario?:string[];
    descripcion:string;
};

export default function useRegistrarInventario(){

    const INITIAL_FORM_VALUES:InitialFormValues = {
        nombre_inventario:"",
        tipo_inventario:"categoria",
        categoria:"",
        auxiliares_inventario:[],
        descripcion:"",
        productos:[]
    };

    const [ current,setCurrent ] = useState<number>(0);
    const { values,handleChange,setValues } = useForm(INITIAL_FORM_VALUES);
    const { data:dataEmpleados,isLoading:isLoadingEmpleados } = useFetch(`usuarios?rol=admin`);
    const { data:dataProductos,isLoading:isLoadingProductos } = useFetch(`productos`);
    const { data:dataCategorias,isLoading:isLoadingCategorias } = useFetch(`categorias`);
    const { data:dataSucursales,isLoading:isLoadingSucursales } = useFetch(`sucursales`);

    console.log(values);


    const next = () => {
        setCurrent(current + 1);
    }

    const prev = () => {
        setCurrent(current - 1);
    }

    const handleRegisterInventario = () => {
        console.log(values);
    }

    return {

        values,
        handleChange,
        setValues,

        current,
        next,
        prev,

        handleRegisterInventario,

        empleados:dataEmpleados?.usuarios,
        isLoadingEmpleados,

        productos:dataProductos?.productos,
        isLoadingProductos,

        categorias:dataCategorias?.categorias,
        isLoadingCategorias,

        sucursales:dataSucursales?.sucursales,
        isLoadingSucursales
    }

}