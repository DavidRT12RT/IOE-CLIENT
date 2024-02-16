import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";
import fetchAdapter from "../../../helpers/fetch";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

interface InitialFormValues {
    nombre_inventario:string;
    tipo_inventario:string;
    categoria?:string;
    productos?:string[];
    auxiliares?:string[];
    descripcion:string;
    sucursal:string;
};

export default function useRegistrarInventario(){

    const navigate = useNavigate();

    const INITIAL_FORM_VALUES:InitialFormValues = {
        nombre_inventario:"",
        tipo_inventario:"categoria",
        auxiliares:[],
        descripcion:"",
        sucursal:""
    };

    const [ current,setCurrent ] = useState<number>(0);
    const { values,handleChange,setValues } = useForm(INITIAL_FORM_VALUES);
    const { data:dataEmpleados,isLoading:isLoadingEmpleados } = useFetch(`usuarios?rol=admin`);
    const { data:dataProductos,isLoading:isLoadingProductos } = useFetch(`productos`);
    const { data:dataCategorias,isLoading:isLoadingCategorias } = useFetch(`categorias`);
    const { data:dataSucursales,isLoading:isLoadingSucursales } = useFetch(`sucursales`);

    const next = () => {
        setCurrent(current + 1);
    }

    const prev = () => {
        setCurrent(current - 1);
    }

    const handleRegisterInventario = async() => {
        
        const response = await fetchAdapter(`inventarios`,values,"POST");
        const body = await response.json();

        if(response.status !== 201) return message.error(body.message);

        //Inventario creado con exito!
        message.success(body.message);
        navigate(`/almacen/inventarios/${body.inventario.id}`);
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