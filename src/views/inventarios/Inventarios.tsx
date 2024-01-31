//Components
import { InvtFinder } from "./components/InvtFinder";
import { InvtResults } from "./components/InvtResults";
import { InvtInfo } from "./components/InvtInfo";

//Custom hook to handle the logic 
import useInventarios from "./hooks/useInventarios";

//Style CSS
import "./assets/style.css";

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
                <h1 className="text-5xl lg:text-6xl font-extrabold font-playfair">Inventarios</h1>
                <InvtFinder filterValue={filterValue} setFilterValue={setFilterValue}/>
                <InvtResults isLoadingInventarios={isLoadingInventarios} filteredInventarios={filteredInventarios} handleChangeInventarioSelected={handleChangeInventarioSelected}/>
            </div>
            {
                inventarioSelected === null ? (<div className= "invtInfoNotSelected col-span-0 md:col-span-3"><p className="">Seleciona un inventario para ver una previsualizacion de su informacion</p> </div> ) : <InvtInfo inventario={inventarioSelected}/>
            }
        </section>
    );

}

export default Inventarios
