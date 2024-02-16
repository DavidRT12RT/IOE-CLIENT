import { Input, Textarea } from "@nextui-org/react";
import { RegisterProvedor } from "../../hooks/useRegistrarProvedor";
import { ChangeEvent } from "react";

interface InformacionBasicaProvedorProps{
    values:RegisterProvedor;
    handleChange:(event:ChangeEvent<HTMLInputElement>) => void
}

export default function InformacionBasica({values,handleChange}:InformacionBasicaProvedorProps){


    return (

        <>
            <Input
                isRequired
                name="nombre"
                label="Nombre"
                value={values.nombre}
                onChange={handleChange}
            />


            <Input
                isRequired
                name="alias"
                label="Alias"
                value={values.alias}
                onChange={handleChange}
            />

            <Input
                isRequired
                name="RFC"
                label="RFC"
                value={values.RFC}
                onChange={handleChange}
            />

            <Input
                isRequired
                name="telefono"
                label="Telefono"
                value={values.telefono}
                onChange={handleChange}
            />

            <Input
                isRequired
                name="correo"
                label="Correo"
                value={values.correo}
                onChange={handleChange}
            />

            <Textarea
                name="notas"
                label="Notas"
                rows={50}
                value={values.notas}
                onChange={handleChange}
            />
        </>

    );

}