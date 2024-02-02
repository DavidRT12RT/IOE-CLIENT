import { Avatar, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

interface InformacionBasicaInventariosProps{
    empleados:any;
    values:any;
    handleChange:(e:any) => void;
    setValues:(e:any) => void;
};

export default function InformacionBasica({empleados,values,handleChange,setValues}:InformacionBasicaInventariosProps){

    return (
        <>

            <Input
                isRequired
                size="md"
                name="nombre_inventario"
                label="Nombre inventario"
                value={values.nombre_inventario}
                onChange={handleChange}
            />
            <Textarea
                size="md"
                name="descripcion"
                label="Descripcion del inventario"
                value={values.descripcion}
                onChange={handleChange}
            />

            <Select
                label="Auxiliares del inventario"
                name="auxiliares_inventario"
                selectionMode="multiple"
                placeholder="Ingresa los auxiliares del inventario"
                value={values.auxiliares_inventario}
                //@ts-ignore
                onSelectionChange={(e) => setValues((values) => ({...values,auxiliares_inventario:[...Array.from(e)]}))}
            >
                {empleados.map((empleado:any) => (
                    <SelectItem key={empleado.id} value={empleado.id} textValue={empleado.nombre}>
                        <div className="flex gap-2 items-center">
                            <Avatar alt={empleado.nombre} className="flex-shrink-0" size="sm" src={`https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png`} />
                            <div className="flex flex-col">
                                <span className="text-small">{empleado.nombre}</span>
                                <span className="text-tiny text-default-400">{empleado.correo}</span>
                            </div>
                        </div>
                    </SelectItem>
                ))}
            </Select>

        </>
    );

}