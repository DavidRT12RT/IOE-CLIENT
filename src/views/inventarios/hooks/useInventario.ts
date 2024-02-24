import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useState } from "react";
import { Inventario } from "../interfaces/Inventario";

export default function useInventario(){

    const params =  useParams();
    const { 
        data:dataInventario,
        isLoading:isLoadingInventario,
        error:errorInventario 
    } = useFetch(`inventarios/${params.id}`);

    const [ isEditing,setIsEditing ] = useState<boolean>(false);

    return {

        inventario:dataInventario?.inventario as Inventario,
        isLoadingInventario,
        errorInventario,

        isEditing,
        setIsEditing,
    };

}