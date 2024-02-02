import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useState } from "react";

export default function useInventario(){

    const params =  useParams();
    const { data:dataInventario,isLoading:isLoadingInventario,error:errorInventario } = useFetch(`inventarios/${params.id}`);
    const [ isEditing,setIsEditing ] = useState();


    return {

        inventario:dataInventario?.inventario,
        isLoadingInventario,
        errorInventario,

        isEditing,
        setIsEditing,

    };

}