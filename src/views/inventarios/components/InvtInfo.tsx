import { Avatar, Chip } from "@nextui-org/react";

//Icons
import { FaFileAlt } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

//Components
import { InvtArticulos } from "./InvtArticulos";


export const InvtInfo = () => {


    return (
        <div className="InvtInfo">
            <div className="flex justify-between">
                {/* BASIC INFORMATION */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-extrabold">Inventario informacion</h1>
                    <p className="text-gray-500">#S0=0003</p>
                    <Chip
                        color="primary" 
                        startContent={<GoDotFill size={18} />}
                        classNames={{
                            content:"font-bold"
                        }}
                    >
                        ACTIVO AL MOMENTO
                    </Chip>
                    {/* INFO CARDS */}
                    <div className="mt-4 flex items-center" style={{gap:35}}>
                        <div className="flex gap-3 items-center">
                            <FaFileAlt className="text-gray-500 text-xl"/>
                            <div className="info">
                                <h3 className="font-bold text-sm text-gray-500">CREADO</h3>
                                <p>14 August 2015</p>
                            </div> 
                        </div>
                        <div className="flex gap-3 items-center">
                            <FaFileAlt className="text-gray-500 text-xl"/>
                            <div className="info">
                                <h3 className="font-bold text-sm text-gray-500">ULTI. FECHA ACTUALIZACION</h3>
                                <p>24 August 2015</p>
                            </div> 
                        </div>
                    </div>
                </div>

                {/* USER THAT MADE THE INVENTORY */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-sm text-gray-500">SUPERVISOR</h3>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" size="md" />
                    <p className="text-primary font-bold">Miriam de Jesus</p>
                    <div className="mt-3">
                        <p>2763 Matpleview Drive</p>
                        <p>South Fulton</p>
                        <p>Teneese - 38257</p>
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <InvtArticulos/>
            </div>
        </div>
    );

};