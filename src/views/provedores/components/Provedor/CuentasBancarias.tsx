import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { CuentaBancaria } from "../../interfaces/Provedor.interface";


interface CuentasBancariasProps{
    cuentasBancarias:CuentaBancaria[]
};

export default function CuentasBancarias({cuentasBancarias}:CuentasBancariasProps){

    return (
        <Table isStriped hideHeader removeWrapper>                
            <TableHeader>
                <TableColumn>BANCO</TableColumn>
                <TableColumn>NUMERO DE CUENTA</TableColumn>
                <TableColumn>CLABE</TableColumn>
                <TableColumn>TIPO</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Ningun banco registrado con el provedor"}>
                {cuentasBancarias.map((cuentaBancaria:CuentaBancaria) => (
                    <TableRow key={cuentaBancaria.id}>
                        <TableCell className="font-bold text-lg">{cuentaBancaria.banco}</TableCell>
                        <TableCell>{cuentaBancaria.numero_cuenta}</TableCell>
                        <TableCell>{cuentaBancaria.CLABE}</TableCell>
                        <TableCell className="font-bold text-lg">{cuentaBancaria.tipo.toUpperCase()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

}