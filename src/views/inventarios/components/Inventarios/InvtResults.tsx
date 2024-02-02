//Custom hook to implement logic
import { Pagination } from "@nextui-org/react";
import useInventarios from "../../hooks/useInventarios";

import InvtCard from "./InvtCard";

interface InvtResultsProps {
    isLoadingInventarios:any;
    filteredInventarios:any;
    handleChangeInventarioSelected:any;
};

export const InvtResults = ({isLoadingInventarios,filteredInventarios,handleChangeInventarioSelected}:InvtResultsProps) => {

    if(isLoadingInventarios) return <h1>Cargando inventarios del servidor...</h1>
    return (
        <div className="invtCardsContainer">
            {
                filteredInventarios.map((inventario:any) => (
                    <InvtCard handleChangeInventarioSelected={handleChangeInventarioSelected} inventario={inventario} key={inventario.id} />

                ))
            }
            <div className="pagination">
                <Pagination total={10} initialPage={1} size="lg"/>
            </div>

        </div>
    );
    
};