import { Input, Textarea } from "@nextui-org/react";
import { useRegistrarProducto } from "../../hooks/useRegistrarProducto";

export default function InformacionBasica(){

    const { values,handleChange } = useRegistrarProducto();

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

            <Textarea 
                isRequired
                size="lg"
                name="descripcion"
                label="Descripcion"
                description="Descripcion acerca del producto"
                value={values.descripcion}
                onChange={handleChange}
            />
            <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="stock"
                label="Stock"
                value={values.stock}
                onChange={handleChange}
            />
            <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="stock_minimo"
                label="Stock minimo"
                value={values.stock_minimo}
                onChange={handleChange}
            />

            <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="costo_promedio"
                label="Costo promedio"
                value={values.costo_promedio}
                onChange={handleChange}
            />

        </>
    );

}