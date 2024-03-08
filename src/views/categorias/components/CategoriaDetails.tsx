import { Button, Input, Textarea } from "@nextui-org/react";
import { useCategorias } from "../context/CategoriasProvider";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

import moment from "moment";

export default function CategoriaDetails(){

    const {
        valuesEditCategoria,
        handleChangeEditCategoria,
        isEditingCategoriaSelected,

        categoriaSelected,
        handleChangeEditStatus,
    } = useCategorias();


    return (
        <div className="bg-white p-5 rounded rounded-lg" style={{minHeight:"100%"}}>
            <div className="flex justify-end items-center gap-5">
                {isEditingCategoriaSelected 
                    ? 
                        <div className="flex gap-2">
                            <Button color="primary" onClick={handleChangeEditStatus}>Guardar cambios</Button>
                            <Button color="danger" onClick={handleChangeEditStatus}>Salir sin guardar</Button>
                        </div>
                    :
                    <Button color="danger" onClick={handleChangeEditStatus}>Editar informacion</Button>
                }
            </div>
            <h2 className="font-extrabold text-2xl mt-3">Informacion basica</h2>
                <div className="p-1 h-full flex flex-col gap-5 mt-3">
                    <Input
                        isDisabled={!isEditingCategoriaSelected}
                        label="Nombre"
                        name="nombre"
                        value={valuesEditCategoria.nombre}
                        onChange={handleChangeEditCategoria}
                    />
                    <Textarea
                        isDisabled={!isEditingCategoriaSelected}
                        label="Descripcion"
                        name="descripcion"
                        value={valuesEditCategoria.descripcion}
                        onChange={handleChangeEditCategoria}
                    />
            </div>

            {/* <h2 className="font-extrabold text-2xl mt-3">Informacion detallada</h2>
            <div></div> */}

            <h2 className="font-extrabold text-2xl mt-3">Otra informacion</h2>
            <div className="p-1">
                <div className="flex gap-3 items-center mt-5">
                    <FaRegCalendarAlt style={{fontSize:"25px"}}/>
                    <p>Fech. Registro {moment(categoriaSelected?.fecha_registro).format("DD/MM/YYYY HH:MM:SS")}</p>
                </div>

                <div className="flex gap-3 items-center mt-5">
                    <FaRegCalendarAlt style={{fontSize:"25px"}}/>
                    <p>Fech. Ult. Actualizacion {moment(categoriaSelected?.fecha_actualizacion).format("DD/MM/YYYY HH:MM:SS")}</p>
                </div>

                <div className="flex gap-3 items-center mt-5">
                    <CiUser style={{fontSize:"25px"}}/>
                    <p>Usuario creador {categoriaSelected?.usuarioCreador.nombre}</p>
                </div>
            </div>

            

        </div>
    );
}