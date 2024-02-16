//Components
import { InvtFinder } from "./components/Inventarios/InvtFinder";
import { InvtResults } from "./components/Inventarios/InvtResults";
import InvtInfo from "./components/Inventario/InvtInfo";

//Custom hook to handle the logic 
import useInventarios from "./hooks/useInventarios";

//Style CSS
import "./assets/Inventarios.css";

import logo from "../../assets/images/LogoGrupoIOE-ColorPrincipal-Sinfondo_500px.png";

const Inventarios = () => {

    const {
        filterValue,
        setFilterValue,

        isLoadingInventarios,
        filteredInventarios,
        handleChangeInventarioSelected,
        inventarioSelected
    } = useInventarios();


    return (
        <section className="Inventarios text-sm md:text-base grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="LeftColumn col-span-5 md:col-span-2">
                <InvtFinder filterValue={filterValue} setFilterValue={setFilterValue}/>
                <InvtResults isLoadingInventarios={isLoadingInventarios} filteredInventarios={filteredInventarios} handleChangeInventarioSelected={handleChangeInventarioSelected}/>
            </div>
            {
                inventarioSelected === null 
                ? 
                    <div className="invtInfoNotSelected col-span-0 md:col-span-3 md:block">
                        <img src={logo}/>
                        <h2 className="text-2xl font-bold">Seleciona un inventario</h2> 
                        <p className="">Seleciona un inventario para ver la previsualizacion de la informacion y editarlo.</p>
                    </div>  
                : 
                    // <InvtInfo inventario={inventarioSelected}/>
                    <div className="col-span-0 md:col-span-3">
                        <InvtInfo inventario={inventarioSelected}/>
                    </div>
            }
        </section>
    );

}

export default Inventarios
