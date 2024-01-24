import { Input, Textarea } from "@nextui-org/react";

export default function InformacionBasica(){

    return (
        <>
            <Input 
                isRequired
                // variant="bordered"
                size="md"
                name="nombre"
                label="Nombre"
                placeholder="Armazon multiusos"
            />

            <Textarea 
                isRequired
                size="lg"
                name="descripcion"
                label="Descripcion"
                description="Descripcion acerca del producto"
            />
            <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="stock"
                label="Stock"
            />
            <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="stock_minimo"
                label="Stock minimo"
            />

            <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="costo_promedio"
                label="Costo promedio"
            />

        </>
    );

}