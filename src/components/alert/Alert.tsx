import { CSSProperties } from "react";
//Icons
import { FaCircleInfo } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { MdDangerous } from "react-icons/md";


export enum AlertType {
    INFO = "INFO",
    WARNING = "WARNING",
    DANGER = "DANGER"
};

interface AlertProps {
    type?:AlertType;
    title:string;
    message:string;
    extraStyles?:CSSProperties
};

import "./alert.css";

export default function Alert({
    type = AlertType.INFO,
    title,
    message,
    extraStyles
}:AlertProps){

    let icon = null;
    switch (type) {
        case AlertType.INFO:
            icon = <FaCircleInfo className="text-blue-500 mr-2" />;
            break;
        case AlertType.WARNING:
            icon = <IoWarning className="text-yellow-500 mr-2" />;
            break;
        case AlertType.DANGER:
            icon = <MdDangerous className="text-red-500 mr-2" />;
            break;
        default:
            break;
    }

    // Asignar la clase de Tailwind CSS según el tipo de alerta
    let bgColorClass = "";
    switch (type) {
        case AlertType.INFO:
            bgColorClass = "bg-blue-200";
            break;
        case AlertType.WARNING:
            bgColorClass = "bg-yellow-200";
            break;
        case AlertType.DANGER:
            bgColorClass = "bg-red-200";
            break;
        default:
            bgColorClass = "bg-gray-200";
            break;
    }

    return (
        <div className={`alert ${bgColorClass}`} style={extraStyles}>
            <p style={{fontSize:"30px"}}>{icon}</p>
            <div>
                <h1 className="font-extrabold text-lg">{title}</h1>
                <p className="text-gray-500">{message}</p>
            </div>
        </div>
    );

}