import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { message } from "antd";

import { FaExclamationCircle } from "react-icons/fa";



export const useRegistrarProducto = () => {

    const [ current,setCurrent ] = useState<number>(0);
    const { data: dataCategorias,isLoading: isLoadingCategorias,error:errorCategorias } = useFetch("categorias");
    const { data: dataAlmacenes,isLoading: isLoadingAlmacenes,error:errorAlmacenes } = useFetch("almacenes");
    const { data: dataProductos,isLoading: isLoadingProductos,error:errorProductos } = useFetch("productos");

    const initialFormValuesState = {
        nombre:"",
        descripcion:"",
        stock:"",
        stock_minimo:"",
        costo_promedio:"",
        categoria:{
            nombre:""
        },
        almacen:{
            nombre:""
        },
        inventariable:true,
        es_producto_padre:false,
        es_producto_hijo:false,
        producto_padre:{
            nombre:""
        },
        numero_productos_hijos:"",
        img:[]
    };

    const { values,handleChange,setValues } = useForm(initialFormValuesState);


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handleRegisterProducto = () => {

        try {
            message.success("Producto registrado con exito!");
            const { data,isLoading } = useFetch("productos");
            console.log(data);
        } catch (error) {
            console.log(error);
            message.error("Error en el servidor al registrar el producto");
        }
    }


    
    return {
        current,
        next,
        prev,

        isLoadingCategorias,
        dataCategorias,
        isLoadingAlmacenes,
        dataAlmacenes,
        isLoadingProductos,
        dataProductos,

        values,
        setValues,
        handleChange,

        errorCategorias,
        errorAlmacenes,
        errorProductos,
        
        handleRegisterProducto
    };

}