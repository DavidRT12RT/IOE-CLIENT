
//Component's
import ProductoBasicInformation from "./components/Producto/ProductoBasicInformation";
import ProductoImages from "./components/Producto/ProductoImages";
import ProductoMoreInformationLeftSide from "./components/Producto/ProductoMoreInformationLeftSide";
import ProductoMoreInformationRightSide from "./components/Producto/ProductoMoreInformationRightSide";

//Hooks
import { useNavigate, useParams } from "react-router-dom";
import { useProducto } from "./hooks/useProducto";

import "./assets/Producto.css";
import { Button } from "@nextui-org/react";

export default function Producto() {

    const { id } = useParams();
    const navigate = useNavigate();


    const {
        producto,
        isLoadingDataProducto,
        errorDataProducto,

        isEditing,
        setIsEditing
    } = useProducto(id);


    if(isLoadingDataProducto) return <h1>Cargando informacion del producto...</h1>

    return (
        <>
            <section className="productoContainer">
                {/* {isEditing 
                    ? 
                    <div className="flex items-center gap-3" style={{alignSelf:"flex-end"}}>
                        <Button 
                            color="primary" 
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            Salir de editar
                        </Button>
                        <Button
                            color="danger"
                        >
                            Guardar cambios
                        </Button>
                    </div> 
                    : 
                    <div style={{alignSelf:"flex-end"}}>
                        <Button 
                            color="primary" 
                            onClick={() => setIsEditing(!isEditing)}
                        >
                            Editar
                        </Button>
                    </div>
                } */}
                <div className="productoFirtsContent  grid grid-cols-1 md:grid-cols-2 place-items-center">
                    <ProductoImages/>
                    <ProductoBasicInformation producto={producto} isEditing={isEditing}/>
                </div>

                <div className="productoSecondContent grid grid-cols-1 md:grid-cols-2 gap-20 mt-20">
                    <ProductoMoreInformationLeftSide producto={producto}/>
                    <ProductoMoreInformationRightSide producto={producto}/>
                </div>

            </section>
        </>
    );

}