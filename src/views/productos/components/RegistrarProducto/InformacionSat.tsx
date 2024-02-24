import { ChangeEvent } from "react";
import { initialFormValues } from "../../../productos/hooks/useRegistrarProducto";
import { Select, SelectItem } from "@nextui-org/react";
import { ClaveSat, UnidadMedidaSat } from "../../interfaces/Producto";

interface InformacionSatProps {
    values:initialFormValues;
    handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void,
    clavesSat:ClaveSat[],
    unidadesMedidaSat:UnidadMedidaSat[]
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
                    clavesSat.map((claveSat:ClaveSat) => (
                        <SelectItem textValue={claveSat.descripcion} key={claveSat.id} value={claveSat.id} id={claveSat.id}>{claveSat.clave} {claveSat.descripcion}</SelectItem>
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
                    unidadesMedidaSat.map((unidadMedidaSat:UnidadMedidaSat) => (
                        <SelectItem key={unidadMedidaSat.id} value={unidadMedidaSat.id} id={unidadMedidaSat.id} textValue={unidadMedidaSat.unidad}>{unidadMedidaSat.unidad} {unidadMedidaSat.descripcion}</SelectItem>
                    ))
                }
            </Select>
        </>
    );
}