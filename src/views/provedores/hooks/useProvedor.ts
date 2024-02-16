import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { Provedor } from "../interfaces/Provedor.interface";

export default function useProvedor(){


    const { id } = useParams();
    const { data:dataProvedor,isLoading:isLoadingProvedor,error:errorProvedor } = useFetch(`provedores/${id}`);

    return {
        provedor:dataProvedor?.provedor as Provedor,
        isLoadingProvedor,
        errorProvedor
    };

}