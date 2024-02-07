import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { message } from "antd";
import fetchAdapter from "../../../helpers/fetch";
import { useNavigate } from "react-router-dom";

export const useRegistrarProducto = () => {

    const [ current,setCurrent ] = useState<number>(0);
    const { data: dataCategorias,isLoading: isLoadingCategorias,error:errorCategorias } = useFetch("categorias");
    const { data: dataSucursales,isLoading: isLoadingSucursales,error:errorSucursales } = useFetch("sucursales");
    const { data: dataAlmacenes,isLoading: isLoadingAlmacenes,error:errorAlmacenes } = useFetch("almacenes");
    const { data: dataProductos,isLoading: isLoadingProductos,error:errorProductos } = useFetch("productos");

    const navigate = useNavigate();

    interface AlmacenStock {
        stock:number;
        almacen:string;
    }

    interface initialFormValues {
        nombre:string;
        descripcion:string;
        stock_minimo:string;
        costo_promedio:string;
        categoria:any;
        almacenes:AlmacenStock[];
        inventariable:boolean;
    }

    const initialFormValuesState:initialFormValues = {
        nombre:"",
        descripcion:"",
        stock_minimo:"",
        costo_promedio:"",
        categoria:"",
        inventariable:true,
        almacenes:[],
        // es_producto_padre:false,
        // es_producto_hijo:false,
        // producto_padre:{
        //     nombre:""
        // },
        // numero_productos_hijos:"",
        // img:[],
        // sucursales:[],
    };

    const { values,handleChange,setValues } = useForm(initialFormValuesState);


    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handleRegisterProducto = async () => {

        //@ts-ignore
        values.almacenes = values.almacenes.map(almacen => ({almacen,stock:1}));
        values.categoria = values.categoria.id;

        const response = await fetchAdapter(`productos`,values,"POST");
        const body = await response.json();

        if(response.status !== 201) return message.error(body.message);

        message.success(body.message);
        navigate(`/almacen/producto/${body?.producto?.id}`);

    }

    return {
        current,
        next,
        prev,

        isLoadingCategorias,
        dataCategorias,

        isLoadingSucursales,
        dataSucursales,

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
        errorSucursales,
        
        handleRegisterProducto
    };

}