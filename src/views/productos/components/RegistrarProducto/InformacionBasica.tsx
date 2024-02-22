import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Categoria } from "../../interfaces/Producto";
import { initialFormValues } from "../../hooks/useRegistrarProducto";
import { ChangeEvent } from "react";


interface InformacionBasicaProps{
    values:initialFormValues;
    handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void;
    categorias:Categoria[];
};

export default function InformacionBasica({values,handleChange,categorias}:InformacionBasicaProps){

    return (
        <>
            <Input 
                isRequired
                // variant="bordered"
                size="md"
                name="nombre"
                label="Nombre"
                placeholder="Armazon multiusos"
                value={values.nombre}
                onChange={handleChange}
            />
            <Select
                name="categoria"
                label="Categoria del producto"
                value={[values.categoria]}
                // @ts-ignore
                onChange={handleChange}
            >
                {
                    categorias.map((categoria:Categoria) => (
                        <SelectItem key={categoria.id} value={categoria.id} textValue={categoria.nombre} id={categoria.id}>{categoria.nombre}</SelectItem>
                    ))
                }
            </Select>
            <Textarea 
                isRequired
                size="lg"
                name="descripcion"
                label="Descripcion"
                description="Descripcion acerca del producto"
                value={values.descripcion}
                onChange={handleChange}
            />
        </>
    );

}