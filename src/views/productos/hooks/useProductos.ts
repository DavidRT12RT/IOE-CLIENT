import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Producto } from "../interfaces/Producto";

export enum typeOfVisibleDataProductos {
    Table = "table",
    Boxes = "boxes"
};

export default function useProductos(){


    const { data:dataProductos,isLoading:isLoadingProductos,error:errorProductos } = useFetch("productos");
    const [ typeOfVisible,setTypeOfVisible ] = useState<typeOfVisibleDataProductos>(typeOfVisibleDataProductos.Boxes);

    return {
        productos:dataProductos?.productos as Producto[], 
        isLoadingProductos,
        errorProductos,

        typeOfVisible,
        setTypeOfVisible
    };

}