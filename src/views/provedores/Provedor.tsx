import useProvedor from "./hooks/useProvedor";
import ProductosContainer from "./components/Provedor/ProductosContainer";
import PedidosContainer from "./components/Provedor/PedidosContainer";
import ProvedorInformation from "./components/Provedor/ProvedorInformation";

import "./assets/Provedor.css";


export default function Provedor(){

    const {
        provedor,
        isLoadingProvedor,
        errorProvedor
    } = useProvedor();


    if(isLoadingProvedor) return <h1>Cargando informacion provedor</h1>
    if(errorProvedor) return <h1>Error al cargar la informacion del provedor</h1>
    return (
        <section className="ProvedorContainer">

            <div className="ProvedorRelations">
                {/* @ts-ignore */}
                <ProductosContainer productos={provedor.provedorProductos.map(provedorProducto => provedorProducto.producto)}/>
                <PedidosContainer/>
            </div>

            <ProvedorInformation provedor={provedor}/>

        </section>

    );

}