type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export default function fetchAdapter(
    endpoint:string,
    data:any = null,
    method:HttpMethod = "GET", 
    transform:boolean = true
):Promise<Response>{

    const baseURL = `${import.meta.env.VITE_REACT_APP_BACKEND_API_URL}/api/${endpoint}`;
    const token = localStorage.getItem("token") || "";

    const fetchOptions = {
        method,
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:data === null ? undefined : transform ? JSON.stringify(data) : data
    };

    return fetch(baseURL,fetchOptions);

}