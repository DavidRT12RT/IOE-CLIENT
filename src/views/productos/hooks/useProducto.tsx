import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";

export const useProducto = (id:string = "") => {

    const { data:dataProducto,isLoading:isLoadingDataProducto,error:errorDataProducto } = useFetch(`productos/${id}`);
    const [ isEditing,setIsEditing ] = useState<boolean>(false);


    return {
        producto:dataProducto?.producto,
        isLoadingDataProducto,
        errorDataProducto,
        
        isEditing,
        setIsEditing
    };

}