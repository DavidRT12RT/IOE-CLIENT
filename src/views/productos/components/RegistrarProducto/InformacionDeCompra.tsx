import { Input, Select, SelectItem } from "@nextui-org/react";
import { initialFormValues } from "../../hooks/useRegistrarProducto";
import { ChangeEvent } from "react";

interface InformacionCompraProps {
    values:initialFormValues;
    handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void
};

export default function InformacionDeCompra({values,handleChange}:InformacionCompraProps){

    return (
        <>
            <Select
                label="Unidad de compra"
                name="unidad_compra"
                selectedKeys={[values.unidad_compra]}
                // @ts-ignore
                onChange={handleChange}
            >
                <SelectItem value="PIEZA" id="PIEZA" textValue="PIEZA" key={"PIEZA"}>PIEZA</SelectItem>
                <SelectItem value="CAJA" id="CAJA" textValue="CAJA" key={"CAJA"}>CAJA</SelectItem>
                <SelectItem value="PAQUETE" id="PAQUETE" textValue="PAQUETE" key={"PAQUETE"}>PAQUETE</SelectItem>
            </Select>
            <Select
                label="Unidad de venta"
                name="unidad_venta"
                selectedKeys={[values.unidad_venta]}
                // @ts-ignore
                onChange={handleChange}
            >
                <SelectItem value="PIEZA" id="PIEZA" textValue="PIEZA" key={"PIEZA"}>PIEZA</SelectItem>
                <SelectItem value="CAJA" id="CAJA" textValue="CAJA" key={"CAJA"}>CAJA</SelectItem>
                <SelectItem value="PAQUETE" id="PAQUETE" textValue="PAQUETE" key={"PAQUETE"}>PAQUETE</SelectItem>
            </Select>
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
            {/* <Input 
                isRequired
                // variant="bordered"
                size="md"
                type="number"
                name="costo_promedio"
                label="Costo promedio"
                value={values.costo_promedio}
                onChange={handleChange}
            /> */}
            <Select
                label="Metodo de reabasto"
                name="metodo_reabasto"
                selectedKeys={[values.metodo_reabasto]}
                // @ts-ignore
                onChange={handleChange}
            >
                <SelectItem value="FIJO" id="FIJO" textValue="FIJO" key={"FIJO"}>FIJO</SelectItem>
                <SelectItem value="RESURTIBLE" id="RESURTIBLE" textValue="RESURTIBLE" key={"RESURTIBLE"}>RESURTIBLE</SelectItem>
            </Select>
        </>
    );

}