import { useState } from "react";
import { Categoria } from "../interfaces/categorias.interface";

import { IoIosArrowDown } from "react-icons/io";
import { useCategorias } from "../context/CategoriasProvider";



interface CategoriaCardProps{
    categoria:Categoria;
}

export default function CategoriaCard({categoria}:CategoriaCardProps){

    const {
        setCategoriaSelected
    } = useCategorias();

    const [ isExpand,setIsExpand ] = useState<boolean>(false);

    const handleChangeCategoriaSelected = (newCategoriaSelected:Categoria) => {
        setCategoriaSelected(newCategoriaSelected);
    };


    return (
        <div className="categoriaCard" >
            <div>
                <h3 className="text-lg font-extrabold" onClick={() => handleChangeCategoriaSelected(categoria)}>{categoria.nombre}</h3>
                <div className="flex items-center gap-2">
                    <p className="text-gray-500 font-bold">Productos {categoria.productos.length}</p>
                    <p className="text-gray-500 font-bold">Sub. Categorias {categoria?.categorias_hija?.length}</p>
                </div>
                {isExpand && 
                        (categoria.categorias_hija && categoria.categorias_hija.length >= 1 ? (
                        <ul className="flex flex-col gap-2 mt-3">
                            <hr />
                            {categoria.categorias_hija.map((categoriaHija: Categoria) => (
                                <li key={categoriaHija.id}>
                                    <h4 className="font-extrabold" onClick={() => handleChangeCategoriaSelected(categoriaHija)}>{categoriaHija.nombre}</h4>
                                </li>
                            ))}
                        </ul>
                    ) : (
                    <h4 className="font-extrabold">Ninguna sub categoria registrada aun...</h4>
                ))}
            </div>
            <p onClick={() => setIsExpand(!isExpand)}><IoIosArrowDown /></p>
        </div>
    );

}