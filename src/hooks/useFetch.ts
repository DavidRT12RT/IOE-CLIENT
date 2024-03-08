import { useEffect, useState } from "react";

export function useFetch(url:string){

    const baseURL = `${import.meta.env.VITE_REACT_APP_BACKEND_API_URL}/api/${url}`;

    const [ data,setData ] = useState<null | any>(null);
    const [ isLoading,setIsLoading ] = useState(true);
    const [ error,setError ] = useState<null | string>(null);
    const [ controller,setController ] = useState<any>(null);

    useEffect(() => {

        const abortController = new AbortController;
        const token = localStorage.getItem("token") || "";
        const fetchOptions = {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            },
        };

        setController(abortController);
        setIsLoading(true);
        fetch(baseURL,{signal:abortController.signal,...fetchOptions}) // -> Pequeno rastreador a la peticion y poder rastrarlo
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => {
            if(error.name === "AbortError"){
                console.log("Request cancelada");
            }else{
                setError(error)
            }
        })
        .finally(() => setIsLoading(false));

        return () => abortController.abort(); // -> El return de limpieza de useEffect se disparara cuando cerremos el componente y la peticion se cancelera

    },[]);

    const handleCancelRequest = () => {

        if(controller){
            controller.abort();
            setError("Request cancelada!");
        }

    }


    return {
        data,
        setData,
        isLoading,
        setIsLoading,
        error,
        handleCancelRequest
    };

}