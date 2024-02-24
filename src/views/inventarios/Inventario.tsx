//Components
import InvtInfo from "./components/Inventario/InvtInfo";
import InvtItems from "./components/Inventario/InvtItems";

//Custom hook to control the logic of update the inventory
import useInventario from "./hooks/useInventario";

//Styles
import "./assets/Inventario.css";

export default function Inventario(){

    const {
        inventario,
        isLoadingInventario,
        errorInventario,

        isEditing,
        setIsEditing,

    } = useInventario();

    
    if(isLoadingInventario) return (<h1>Cargando inventario</h1>)
    if(errorInventario) return (<h1>Error a la hora de cargar inventario</h1>)

    return (
        <section className="InvtContainer">
            <InvtItems 
                inventario={inventario} 
                isEditing={isEditing} 
                setIsEditing={setIsEditing}
            />
            <InvtInfo 
                inventario={inventario}
            />
        </section>
    );

}