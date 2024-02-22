import { useFetch } from "../../../hooks/useFetch";
import { Provedor } from "../interfaces/Provedor.interface";

export default function useProvedores(){

    const { data:dataProvedores,isLoading:isLoadingProvedores,error:errorProvedores } = useFetch("provedores");

    return {
        provedores:dataProvedores?.provedores as Provedor[],
        isLoadingProvedores,
        errorProvedores
    };

}