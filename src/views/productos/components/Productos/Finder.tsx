import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";


export default function Finder(){

    return (                
        <div className="finder">
            <h1 className="text-4xl font-extrabold">Productos</h1>
            <Input
                className="font-extrabold text-4xl"
                startContent={
                    <p className="font-extrabold"><CiSearch /></p>
                }
                isClearable
                placeholder="Buscar "
            />

        </div>
    );

}