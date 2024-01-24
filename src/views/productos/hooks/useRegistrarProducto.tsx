import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";


export const useRegistrarProducto = () => {

    const [ current,setCurrent ] = useState<number>(0);
    const { data: dataCategorias,isLoading: isLoadingCategorias } = useFetch("categorias");
    const { data: dataAlmacenes,isLoading: isLoadingAlmacenes } = useFetch("almacenes");

    const initialFormValuesState = {
        nombre:"",
        descripcion:"",
        stock:"",
        stock_minimo:"",
        costo_promedio:"",
        categoria:"",
        almacen:""
    };

    const { values,handleChange } = useForm(initialFormValuesState);

    console.log(values);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };



    
    return {
        current,
        next,
        prev,

        isLoadingCategorias,
        dataCategorias,
        isLoadingAlmacenes,
        dataAlmacenes,

        values,
        handleChange
    };

}