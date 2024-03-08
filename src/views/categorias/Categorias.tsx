import { Button,Input,Pagination } from "@nextui-org/react";

import CategoriaCard from "./components/CategoriaCard";
import CategoriaSelected from "./components/CategoriaSelected";
import CategoriaSelectedNull from "./components/CategoriaSelectedNull";
import CategoriaRegistrarModal from "./components/CategoriaRegistrarModal";
import { useCategorias } from "./context/CategoriasProvider";

import "./assets/categorias.css";

export default function Categorias(){

    const {
        categorias,
        totalCategorias,
        isLoadingCategorias,
        errorCategorias,
        filterValue,
        setFilterValue,
        page,
        pages,
        setPage,
        onRowsPerPageChange,


        categoriaSelected,

        onOpenModalRegister
    } = useCategorias();

    if(isLoadingCategorias) return <h1>Cargando categorias del servidor...</h1>
    if(errorCategorias) return <h1>Error cargando categorias</h1>

    return (
        <section className="categoriasContainer">
            <CategoriaRegistrarModal/>
            <div className="descripcion">
                <h1 className="text-4xl font-extrabold">Categorias</h1>
                <p className="text-gray-500">Organiza tus <b>productos</b> y <b>categorias</b> y haz mas facil el proceso de <b>busqueda</b>.</p>
            </div>

            <div className="categoriasSecondContainer">
                <div className="flex justify-between border-b border-gray-400 p-4">
                    <div className="w-full">
                        <h2 className="text-xl font-extrabold">Mostrando {categorias.length} Categorias <span className="text-small text-gray-500">TOTAL {totalCategorias}</span></h2>
                        <div>
                            <Input
                                variant="bordered"
                                className="w-1/2 mt-3"
                                placeholder="Busca una categoria por su nombre..."
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                                isClearable={true}
                                onClear={() => setFilterValue("")}
                            />
                            <div className="mt-3 px-3">
                                <label className="flex items-center text-default-400 text-small">
                                    Categorias por pagina
                                    <select
                                        className="bg-transparent outline-none text-default-400 text-small"
                                        onChange={onRowsPerPageChange}
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex place-items-center gap-2">
                        <Button color="primary" onClick={onOpenModalRegister}>Anadir categoria</Button>
                    </div>
                </div>

                <div className="categoriasMainContainer">

                    <div className="categoriasResults">
                        {categorias.map(categoria => (
                            <CategoriaCard categoria={categoria} key={categoria.id} />
                        ))}
                        <Pagination
                            className="my-3 pagination"
                            isCompact
                            showControls
                            showShadow
                            color="primary"
                            page={page}
                            total={pages}
                            onChange={setPage}
                        />
                    </div>
                    {
                        categoriaSelected === null 
                        ?
                        <CategoriaSelectedNull/>
                        :
                        <CategoriaSelected/>
                    }

                </div>
            </div>
        </section>
    )

}