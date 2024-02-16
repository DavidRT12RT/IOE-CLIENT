import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { ChangeEvent, useMemo, useState } from "react";
import { Inventario } from "../interfaces/Inventario";

export default function useInventario(){

    const params =  useParams();
    const { 
        data:dataInventario,
        isLoading:isLoadingInventario,
        error:errorInventario 
    } = useFetch(`inventarios/${params.id}`);
    const [ isEditing,setIsEditing ] = useState<boolean>(false);

    const [ almacenesSelected,setAlmacenSelected ] = useState([dataInventario?.inventario.sucursal.almacenes[0].id]);

    const handleChangeAlmacen = (event:ChangeEvent<HTMLSelectElement>) => {
        setAlmacenSelected([...almacenesSelected,event.target.value]);
    }

    // const filteredCategorias = useMemo(() => {

    //     let filteredCategorias = [...categorias];
    //     if (hasSearchFilter) filteredCategorias = filteredCategorias.filter(categoria => categoria.nombre.toLowerCase().includes(filterValue.toLowerCase()))
    //     return filteredCategorias;

    // }, [filterValue,categorias]);






    return {

        inventario:dataInventario?.inventario as Inventario[],
        isLoadingInventario,
        errorInventario,

        isEditing,
        setIsEditing,

        almacenesSelected,
        handleChangeAlmacen

    };

}