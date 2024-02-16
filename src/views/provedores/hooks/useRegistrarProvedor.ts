import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import fetchAdapter from "../../../helpers/fetch";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export interface Direccion {
    calle:string;
    estado:string;
    ciudad:string;
    CP:string;
};


export enum CondicionesComerciales {
    CONTADO = "CONTADO",
    CREDITO = "CREDITO"
};

export enum CondicionesPago {
    PAGO_INMEDIATO = "PAGO_INMEDIATO",
    "15 DIAS" = "15 DIAS",
    "21 DIAS" = "21 DIAS",
    "30 DIAS" = "30 DIAS",
    "45 DIAS" = "45 DIAS",
    "FIN DE MES" = "FIN DE MES"
};

export enum TipoPersona {
    MORAL = "MORAL",
    FISICA = "FISICA",
};

export interface CuentaBancaria {
    numero_cuenta:string;
    banco:string;
    tipo:string;
    CLABE:string;
};

export interface RegisterProvedor{
    nombre:string;
    alias:string,
    RFC:string;
    telefono:string;
    correo:string;
    notas:string;
    condicionesComerciales:CondicionesComerciales;
    condicionesPago:CondicionesPago;
    tarifas:string[];
    tipoPersona:TipoPersona,
    cuentasBancarias:CuentaBancaria[];
    direcciones:Direccion[];
};

export default function useRegistrarProvedor(){


    const navigate = useNavigate();

    const INITIAL_VALUES:RegisterProvedor= {
        nombre:"",
        alias:"",
        RFC:"",
        telefono:"",
        correo:"",
        notas:"",
        condicionesComerciales:CondicionesComerciales.CONTADO,
        condicionesPago:CondicionesPago.PAGO_INMEDIATO,
        tarifas:[],
        cuentasBancarias:[],
        tipoPersona:TipoPersona.MORAL,
        direcciones:[]
    };

    const [ current,setCurrent ] = useState<number>(0);

    const {
        values,
        handleChange,
        setValues,
    } = useForm(INITIAL_VALUES);

    const handleAddNewProvedor = async() => {

        values.RFC = values.RFC.replace(/\s+/g, '');
        values.telefono = values.telefono.replace(/\s+/g, '');
        const resp = await fetchAdapter(`provedores/`,values,"POST");
        const body = await resp.json();

        if(resp.status !== 201) return message.error(body.message);

        //Provedor creado con exito!
        message.success(body.message);
        navigate(`/almacen/provedores/${body?.provedor?.id}`);

    }

    return {
        current,
        setCurrent,

        values,
        handleChange,
        setValues,

        handleAddNewProvedor
    };

}