import { Select, SelectItem } from "@nextui-org/react";
import { RegisterProvedor } from "../../hooks/useRegistrarProvedor";
import { ChangeEvent } from "react";

interface InformacionCompraProps {
    values:RegisterProvedor;
    handleChange:(event:ChangeEvent<HTMLInputElement>) => void;
    setValues:(newState:any) => void;
};

export default function InformacionCompra({values,handleChange,setValues}:InformacionCompraProps){

    return (
        
        <>
            <Select
                label="Condiciones comerciales"
                name="condicionesComerciales"
                selectedKeys={values.condicionesComerciales}
                onSelectionChange={(e) => setValues((values:RegisterProvedor) => ({...values,condicionesComerciales:[...Array.from(e)]}))}
            >
                <SelectItem value={"CONTADO"} key={"CONTADO"}>CONTADO</SelectItem>
                <SelectItem value={"CREDITO"} key={"CREDITO"}>CREDITO</SelectItem>
            </Select>

            <Select
                label="Condiciones de pago"
                name="condicionesPago"
                selectedKeys={values.condicionesPago}
                onSelectionChange={(e) => setValues((values:RegisterProvedor) => ({...values,condicionesPago:[...Array.from(e)]}))}
            >
                <SelectItem value={"PAGO_INMEDIATO"} key={"CONTADO"}>PAGO INMEDIATO</SelectItem>
                <SelectItem value={"15 DIAS"} key={"15 DIAS"}>15 DIAS</SelectItem>
                <SelectItem value={"21 DIAS"} key={"21 DIAS"}>21 DIAS</SelectItem>
                <SelectItem value={"30 DIAS"} key={"30 DIAS"}>30 DIAS</SelectItem>
                <SelectItem value={"45 DIAS"} key={"45 DIAS"}>45 DIAS</SelectItem>
                <SelectItem value={"FIN DE MES"} key={"FIN DE MES"}>FIN DE MES</SelectItem>
            </Select>

            <Select
                label="Tarifas"
                name="tarifas"
                selectedKeys={values.tarifas}
                onSelectionChange={(e) => setValues((values:RegisterProvedor) => ({...values,tarifas:[...Array.from(e)]}))}
            >
                <SelectItem value={"MXN"} key={"MXN"}>MXN</SelectItem>
            </Select>
        </>


    );

}