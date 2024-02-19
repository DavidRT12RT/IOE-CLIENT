import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Direccion } from "../../interfaces/Provedor.interface";

interface DireccionesProps{
    direcciones:Direccion[]
}

export default function Direcciones({direcciones}:DireccionesProps){

    return (
        <Table isStriped hideHeader removeWrapper>                
            <TableHeader>
                <TableColumn>CIUDAD</TableColumn>
                <TableColumn>ESTADO</TableColumn>
                <TableColumn>CALLE</TableColumn>
                <TableColumn>CP</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Ninguna direccion registrada con el provedor"}>
                {direcciones.map((direccion:Direccion,index:number) => (
                    <TableRow key={index} >
                        <TableCell className="font-bold text-lg">{direccion.ciudad.toUpperCase()}</TableCell>
                        <TableCell >{direccion.estado}</TableCell>
                        <TableCell>{direccion.calle}</TableCell>
                        <TableCell className="font-bold text-lg">CP {direccion.CP.toUpperCase()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>

        </Table>
    );

}