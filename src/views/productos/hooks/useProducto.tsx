import { useFetch } from "../../../hooks/useFetch";

export const useProducto = (id:string = "") => {

    const { data:dataProducto,isLoading:isLoadingDataProducto,error:errorDataProducto } = useFetch(`productos/${id}`);


    return {
        producto:dataProducto?.producto,
        isLoadingDataProducto,
        errorDataProducto
    };

}