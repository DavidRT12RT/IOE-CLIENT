import { message } from "antd";
import fetchAdapter from "../helpers/fetch";
import { checkingCredentials, login, logout, stopCheckingCredentials } from "./authSlice"


export const loginToServer = (values:any)=> {

    return async(dispatch:any) => {

        dispatch(checkingCredentials());

        const {
            correo,
            password,
            rememberMe
        } = values;

        //Peticion para login
        const resp = await fetchAdapter(`auth/login`,{correo,password},"POST");
        const body = await resp.json();

        if(resp.status !== 201){
            dispatch(stopCheckingCredentials())
            return message.error(body.message);
        }

        //Setear informacion en el estado global de la aplicacion (REDUX)
        dispatch(login({...body,rememberMe}));

        //Login con exito!
        message.success(`Bienvenido de vuelta ${body?.nombre}`);

    }

}

export const startChecking = () => {

    return async(dispatch:any) => {
        dispatch(checkingCredentials());

        try {
            //peticion de revalidacion
            const resp = await fetchAdapter(`auth/renew`,undefined,"POST");
            const body = await resp.json();
            if(resp.status !== 201) {
                return dispatch(logout());
            }

            dispatch(login({...body,rememberMe:true}));
            
        } catch (error) {
            message.error("Error en la solicitud de revalidacion");
            return dispatch(logout());
        }

    }

}