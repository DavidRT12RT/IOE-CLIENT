import Categorys from "./components/Provedores/Categorys";
import Finder from "./components/Provedores/Finder";
import useProvedores from "./hooks/useProvedores";

import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Provedor } from "./interfaces/Provedor.interface";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

import "./assets/Provedores.css";


export default function Provedores(){

    const {
        provedores,
        isLoadingProvedores,
        errorProvedores
    } = useProvedores();


    if(isLoadingProvedores) return <h1>Cargando provedores</h1>
    if(errorProvedores) return <h1>Error provedores</h1>

    return (
        <section className="provedoresContainer">

            <div className="productsFirtsSection">
                <Finder/>
                <Categorys/>
            </div>
            <p className="text-gray-500">Mostrando {provedores.length} provedores</p>
            <div className="provedoresSection">
                <Table 
                    isStriped 
                    shadow="none"
                    style={{padding:"0px"}}
                    removeWrapper
                    isCompact
                >
                    <TableHeader>
                        <TableColumn>NOMBRE</TableColumn>
                        <TableColumn>RFC</TableColumn>
                        <TableColumn>TELEFONO</TableColumn>
                        <TableColumn>CORREO</TableColumn>
                        <TableColumn>PRODUCTOS ASOCIADOS</TableColumn>
                        <TableColumn>TIPO DE PERSONA</TableColumn>
                        <TableColumn>CONDICIONES DE PAGO</TableColumn>
                        <TableColumn>CUENTAS BANCARIAS</TableColumn>
                        {/* @ts-ignore */}
                        <TableColumn>{}</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {
                            provedores.map((provedor:Provedor) => (
                                <TableRow key={provedor.id} style={{height:"80px"}}>
                                    <TableCell className="font-bold"><Link className="flex items-center gap-1" to={`/almacen/provedores/${provedor.id}`}>{provedor.nombre}{provedor.alias && <span className="text-gray-500 text-sm">({provedor.alias})</span>}</Link></TableCell>
                                    <TableCell className="font-bold">{provedor.RFC}</TableCell>
                                    <TableCell className="font-bold">{provedor.telefono}</TableCell>
                                    <TableCell className="font-bold">{provedor.correo}</TableCell>
                                    <TableCell className="font-bold">{provedor.provedorProductos.length}</TableCell>
                                    <TableCell className="font-bold">{provedor.tipoDePersona}</TableCell>
                                    <TableCell className="font-bold">{provedor.condicionesComerciales.map(condicionComercial => condicionComercial)}</TableCell>
                                    <TableCell className="font-bold">{provedor.cuentasBancarias.length}</TableCell>
                                    <TableCell className="font-bold"><Link to={`/almacen/provedores/${provedor.id}`}><IoIosArrowForward/></Link></TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>

            <div className="showResultsSection">
                <label className="flex items-center text-default-400 text-small">
                    Productos por pagina
                    <select
                        className="bg-transparent outline-none text-default-400 text-small ms-5"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </label>
                <Pagination showControls total={5} initialPage={1} />
            </div>
        </section>
    );

}