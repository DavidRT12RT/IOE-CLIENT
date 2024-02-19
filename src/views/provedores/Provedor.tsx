import useProvedor from "./hooks/useProvedor";
import ProductosContainer from "./components/Provedor/ProductosContainer";
import PedidosContainer from "./components/Provedor/PedidosContainer";

import "./assets/Provedor.css";
import ProvedorInformation from "./components/Provedor/ProvedorInformation";

export default function Provedor(){

    const {
        provedor,
        isLoadingProvedor,
        errorProvedor
    } = useProvedor();


    if(isLoadingProvedor) return <h1>Cargando informacion provedor</h1>
    return (
        <section className="ProvedorContainer">

            <div className="ProvedorRelations">
                <ProductosContainer productos={[]}/>
                <PedidosContainer/>
            </div>

            <ProvedorInformation provedor={provedor}/>

        </section>

    );

}