import { Input } from "@nextui-org/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";


export default function Finder(){

    const [ filterValue,setFilterValue ] = useState<string>("");

    return (                
        <div className="finder">
            <h1 className="text-4xl font-extrabold">Productos</h1>
            <Input
                value={filterValue}
                onValueChange={setFilterValue}
                className="font-extrabold text-4xl"
                startContent={
                    <p className="font-extrabold"><CiSearch /></p>
                }
                isClearable
                placeholder="Buscar un articulo por su nombre..."
            />

        </div>
    );

}