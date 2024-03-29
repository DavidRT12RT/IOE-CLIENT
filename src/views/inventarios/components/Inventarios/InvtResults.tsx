//Custom hook to implement logic
import { Pagination } from "@nextui-org/react";

import InvtCard from "./InvtCard";

interface InvtResultsProps {
    isLoadingInventarios:any;
    filteredInventarios:any;
    handleChangeInventarioSelected:any;
};

export const InvtResults = ({isLoadingInventarios,filteredInventarios,handleChangeInventarioSelected}:InvtResultsProps) => {

    if(isLoadingInventarios) return <h1>Cargando inventarios del servidor...</h1>
    return (
        <>
            <div className="invtCardsContainer">
                {
                    filteredInventarios.slice(0,5).map((inventario:any) => (
                        <InvtCard handleChangeInventarioSelected={handleChangeInventarioSelected} inventario={inventario} key={inventario.id} />

                    ))
                }

            </div>
            <div className="pagination">
                <Pagination total={10} initialPage={1} size="lg"/>
            </div>
        </>
    );
    
};