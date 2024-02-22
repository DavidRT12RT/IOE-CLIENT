import { Checkbox, Input } from "@nextui-org/react";
import { initialFormValues } from "../../hooks/useRegistrarProducto";
import { Producto } from "../../interfaces/Producto";
import { ChangeEvent } from "react";



interface InformacionDetalladaPros {
    values:initialFormValues;
    setValues:React.Dispatch<React.SetStateAction<initialFormValues>>,
    handleChange:({ target }: ChangeEvent<HTMLInputElement>) => void,
    productos:Producto[];
}


export default function InformacionDetallada({
    values,
    setValues,
    handleChange,
    productos
}:InformacionDetalladaPros){

    return (
        <>
            {
                !values.es_producto_hijo && (
                    <Checkbox 
                        type="primary"
                        checked={values.es_producto_padre} 
                        // @ts-ignore
                        onChange={(e) => setValues(values => ({...values,es_producto_padre:!values.es_producto_padre}))}
                    >
                        Es producto padre
                    </Checkbox>
                )
            }
            {values.es_producto_padre && (
                <Input
                    isRequired
                    size="md"
                    name="numero_productos_hijos"
                    label="Numero de productos hijos"
                    description="El numero de productos secundarios del mismo modelo"
                    value={values.numero_productos_hijos+""}
                    onChange={handleChange}
                    type="number"
                    min={1}
                />
            )}
            {!values.es_producto_padre && <Checkbox 
                type="primary"
                checked={values.es_producto_hijo} 
                // @ts-ignore
                onChange={(e) => setValues(values => ({...values,es_producto_hijo:!values.es_producto_hijo}))}
            >
                Es producto hijo 
            </Checkbox>
            }
        </>
    );
}