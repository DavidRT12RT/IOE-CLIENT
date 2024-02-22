import { ChangeEvent } from "react";
import { initialFormValues } from "../../../productos/hooks/useRegistrarProducto";
import { Select, SelectItem } from "@nextui-org/react";

interface InformacionSatProps {
    values:initialFormValues;
    handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void,
    clavesSat:string[],
    unidadesMedidaSat:string[]
};

export default function InformacionSat({
    values,
    handleChange,
    clavesSat,
    unidadesMedidaSat
}:InformacionSatProps){
    return (
        <>
            <Select
                name="claveSat"
                label="Clave SAT"
                value={[values.claveSat]}
                // @ts-ignore
                onChange={handleChange}
            >
                {
                    clavesSat.map(claveSat => (
                        <SelectItem textValue={claveSat} key={claveSat} value={claveSat} id={claveSat}>{claveSat}</SelectItem>
                    ))
                }
            </Select>
            <Select
                name="unidadMedidaSat"
                label="Unida de medida SAT"
                value={[values.unidadMedidaSat]}
                // @ts-ignore
                onChange={handleChange}
            >
                {
                    unidadesMedidaSat.map(unidadMedidaSat => (
                        <SelectItem key={unidadMedidaSat} value={unidadMedidaSat} id={unidadMedidaSat} textValue={unidadMedidaSat}>{unidadMedidaSat}</SelectItem>
                    ))
                }
            </Select>
        </>
    );
}