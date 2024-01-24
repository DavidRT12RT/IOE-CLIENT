import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Steps, message } from "antd";

import InformacionBasica from "./components/RegistrarProducto/InformacionBasica";
import InformacionDetallada from "./components/RegistrarProducto/InformacionDetallada";
import Archivos from "./components/RegistrarProducto/Archivos";

import "./assets/RegistrarProducto.css";


export default function RegistrarProducto (){

    
    const [ current,setCurrent ] = useState<number>(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title:<p>Informacion basica del producto</p>,
            content:<InformacionBasica/>,
            id:1
        },
        {
            title:"Informacion detallada del producto",
            content:<InformacionDetallada/>,
            id:2
        },
        {
            title:"Fotos del producto",
            content:<Archivos/>,
            id:3
        }
    ];


    return (
        <section className="registerContainer">
            <h1 className="font-bold text-3xl">Registrar un producto</h1>
            <p className="">Llenar los siguientes datos para registrar un nuevo producto a almacen.</p>
            <Steps current={current} items={steps}/>
            <div className="registerContent">{steps[current].content}</div>
            <div className="mt-3">
                {current < steps.length - 1 && ( 
                    <Button color="primary" onClick={() => next()}> Siguiente</Button>
                )}
                {current === steps.length - 1 && (
                    <Button color="primary" onClick={() => message.success('Registro completado!')}>Terminar</Button>
                )}
                {current > 0 && (
                    <Button color="primary" style={{ margin: '0 8px' }} onClick={() => prev()}>Anterior</Button>
                )}
            </div>
        </section>
    );
}