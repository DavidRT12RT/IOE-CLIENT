import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { message } from "antd";
import fetchAdapter from "../../../helpers/fetch";
import { useNavigate } from "react-router-dom";    
import { Producto } from "../interfaces/Producto";


export enum UnidadCompra {
	PIEZA = "PIEZA",
	CAJA = "CAJA",
	PAQUETE = "PAQUETE"
};

export enum UnidadVenta {
	PIEZA = "PIEZA",
	CAJA = "CAJA",
	PAQUETE = "PAQUETE"
};

export enum MetodoReabasto {
	FIJO = "FIJO",
	RESURTIBLE = "RESURTIBLE"
};
export interface ProvedorProductoNew{
    costo:string;
    provedor:string;
};

export interface AlmacenProductoNew{
    stock:string;
    almacen:string;
};

export interface initialFormValues {
    nombre:string;
    descripcion:string;
    stock_minimo:string;
    costo_promedio:string;
    provedores:ProvedorProductoNew[];
    almacenes:AlmacenProductoNew[];
    categoria:any;
    inventariable:boolean;
    unidad_compra:UnidadCompra;
    unidad_venta:UnidadVenta;
    metodo_reabasto:MetodoReabasto;
    claveSat:string;
    unidadMedidaSat:string;
    es_producto_hijo:false;
    es_producto_padre:false;
    producto_padre:Producto | null;
    numero_productos_hijos:number;
}

export const useRegistrarProducto = () => {

    const [ current,setCurrent ] = useState<number>(0);
    const { data: dataCategorias,isLoading: isLoadingCategorias,error:errorCategorias } = useFetch("categorias");
    const { data: dataSucursales,isLoading: isLoadingSucursales,error:errorSucursales } = useFetch("sucursales");
    const { data: dataAlmacenes,isLoading: isLoadingAlmacenes,error:errorAlmacenes } = useFetch("almacenes");
    const { data: dataProductos,isLoading: isLoadingProductos,error:errorProductos } = useFetch("productos");
    const { data: dataProvedores,isLoading: isLoadingProvedores,error:errorProvedores } = useFetch("provedores");

    const { data: dataSatClaves,isLoading: isLoadingClavesSat,error:errorClavesSat } = useFetch("sat/claves");
    const { data: dataSatUnidades,isLoading: isLoadingUnidadesSat,error:errorUnidadesSat } = useFetch("sat/unidades");

    const navigate = useNavigate();


    const initialFormValuesState:initialFormValues = {
        nombre:"",
        descripcion:"",
        stock_minimo:"",
        costo_promedio:"",
        categoria:"",
        inventariable:true,
        almacenes:[],
        provedores:[],
        unidad_compra:UnidadCompra.PAQUETE,
        unidad_venta:UnidadVenta.PIEZA,
        metodo_reabasto:MetodoReabasto.FIJO,
        claveSat:"",
        unidadMedidaSat:"",
        es_producto_padre:false,
        es_producto_hijo:false,
        producto_padre:null,
        numero_productos_hijos:0,
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
        navigate(`/almacen/productos/${body?.producto?.id}`);

    }

    console.log(values);

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

        isLoadingProvedores,
        dataProvedores,

        isLoadingClavesSat,
        dataSatClaves,

        isLoadingUnidadesSat,
        dataSatUnidades,

        values,
        setValues,
        handleChange,

        errorCategorias,
        errorAlmacenes,
        errorProductos,
        errorSucursales,
        errorProvedores,
        errorClavesSat,
        errorUnidadesSat,

        handleRegisterProducto
    };

}