import { ChangeEvent, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useDisclosure } from "@nextui-org/react";
import { Categoria } from "../interfaces/categorias.interface";
import { message } from "antd";
import fetchAdapter from "../../../helpers/fetch";
import { useForm } from "../../../hooks/useForm";

interface INITIAL_VALUES_TO_ADD {
    nombre:string;
    descripcion:string;
    categoria_padre?:string;
};

interface INITIAL_VALUES_TO_EDIT {
    nombre:string;
    descripcion:string;
    productosDesvincular:string[];
    productosVincular:string[];
};

export type CategoriasContextType = {
	categorias:Categoria[];
    totalCategorias:number;
    isLoadingCategorias:boolean;
    errorCategorias:null | string;
    filterValue:string;
    setFilterValue: React.Dispatch<React.SetStateAction<string>>;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    pages: number;
    onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    isEditingCategoriaSelected:boolean;
    handleChangeEditStatus: () => void;
    categoriaSelected:Categoria | null;
    setCategoriaSelected: React.Dispatch<React.SetStateAction<Categoria | null>>;
    handleRegisterNewCategoria: () => void;
    handleEditCategoriaSelected: () => void;
    isOpenModalRegister: boolean;
    onOpenModalRegister: () => void;
    onOpenChangeModalRegister: () => void;
    onCloseModalRegister: () => void;
    valuesNewCategoria:INITIAL_VALUES_TO_ADD;
    setValuesNewCategoria:React.Dispatch<INITIAL_VALUES_TO_ADD>,
    handleChangeNewCategoria:({ target }: ChangeEvent<HTMLInputElement>) => void

    valuesEditCategoria:INITIAL_VALUES_TO_EDIT,
    setValuesEditCategoria:React.Dispatch<INITIAL_VALUES_TO_EDIT>,
    handleChangeEditCategoria:({ target }: ChangeEvent<HTMLInputElement>) => void,

    selectedProducts:Set<string>,
    setSelectedProducts:React.Dispatch<React.SetStateAction<Set<string>>>

};


const CategoriasContext = createContext<CategoriasContextType | undefined>(undefined);


interface CategoriasProviderProps {
	children:JSX.Element | JSX.Element[]
};

//Provedor del contexto
export const CategoriasProvider = ({children}:CategoriasProviderProps) => {

    const INITIAL_DATA_NEW_CATEGORIA_VALUES:INITIAL_VALUES_TO_ADD= {
        nombre:"",
        descripcion:"",
    };

    const INITIAL_DATA_EDIT_CATEGORIA_SELECTED:INITIAL_VALUES_TO_EDIT = {
        nombre:"",
        descripcion:"",
        productosDesvincular:[],
        productosVincular:[]
    };


	const { data:dataCategorias,isLoading:isLoadingCategorias,error:errorCategorias,setData:setDataCategorias} = useFetch("categorias");
    const [ page, setPage ] = useState<number>(1);
    const [ pages,setPages ] = useState<number>(1);
    const [ rowsPerPage, setRowsPerPage ] = useState<number>(5);
    const [ totalCategorias,setTotalCategorias ] = useState<number>(0);
    const [ categoriaSelected,setCategoriaSelected ] = useState<Categoria | null>(null);
    const [ isEditingCategoriaSelected, setIsEditingCategoriaSelected ] = useState<boolean>(false);
    const [ filterValue,setFilterValue ] = useState<string>("");
    const { isOpen: isOpenModalRegister,onOpen: onOpenModalRegister,onOpenChange: onOpenChangeModalRegister,onClose: onCloseModalRegister } = useDisclosure();
    const [ selectedDesvincularProducts,setSelectedDesvincularProducts ] = useState<Set<string>>(new Set());

    const { values:valuesNewCategoria,setValues:setValuesNewCategoria,handleChange:handleChangeNewCategoria } = useForm(INITIAL_DATA_NEW_CATEGORIA_VALUES);
 	const { values: valuesEditCategoria,setValues: setValuesEditCategoria,handleChange: handleChangeEditCategoria } = useForm(INITIAL_DATA_EDIT_CATEGORIA_SELECTED);

    const handleRegisterNewCategoria = async() => {
        const resp = await fetchAdapter("categorias",valuesNewCategoria,"POST");
        const body = await resp.json();

        if(resp.status !== 201) return message.error(body.message);
        message.success(body.message);
        setDataCategorias({...dataCategorias,categorias:[...dataCategorias?.categorias,body.categoria]});//Agregar la nueva categoria que recien creamos a la data
        setValuesNewCategoria(INITIAL_DATA_NEW_CATEGORIA_VALUES);
    }


    const handleEditCategoriaSelected = async() => {
        const resp = await fetchAdapter(`categorias/${categoriaSelected?.id}`,valuesEditCategoria,"PUT");
        const body = await resp.json();


        if(resp.status !== 200) return message.error(body.message);

        message.success(body.message);

        

    }

    const handleChangeEditStatus = () => {
        if(categoriaSelected === null) return message.error("Ninguna categoria seleccionada para editar!");
        setIsEditingCategoriaSelected(!isEditingCategoriaSelected);
    }

    const filteredCategorias = useMemo(() => {

        if(dataCategorias && dataCategorias.categorias) {
            let filteredCategorias = [...dataCategorias?.categorias];

            if(filterValue.length >= 2){
                filteredCategorias = filteredCategorias.filter((categoria:Categoria) => 
                    categoria.nombre.toLowerCase().includes(filterValue.toLowerCase())
                )
            }

            const start = (page - 1) * rowsPerPage;
            const end = start + rowsPerPage;

            return filteredCategorias.slice(start,end);
        }


    },[isLoadingCategorias,dataCategorias,dataCategorias?.categorias,filterValue,rowsPerPage,page]);

    useEffect(
        () => {
        if(filteredCategorias) {
            const pagesValue = Math.ceil(filteredCategorias?.length | 1 / rowsPerPage);
            setPages(pagesValue);
            setTotalCategorias(dataCategorias?.total);
        }

    },[filteredCategorias,rowsPerPage,setPages]);

    useEffect(() => {
        if(categoriaSelected){
            setValuesEditCategoria({
                nombre:categoriaSelected?.nombre,
                descripcion:categoriaSelected?.descripcion,
                productosDesvincular:[],
                productosVincular:[]
            });

            setSelectedDesvincularProducts(new Set());
        }
    },[categoriaSelected,setValuesEditCategoria]);

    useEffect(() => {

       let productosDesvincular = Array.from(selectedDesvincularProducts);
       //@ts-ignore
       if(productosDesvincular.join("") === "all") productosDesvincular = categoriaSelected?.productos.map(producto => producto.id);

       setValuesEditCategoria((oldState) => ({
            ...oldState,
            productosDesvincular
       }));

    },[selectedDesvincularProducts,setValuesEditCategoria]);

    const onRowsPerPageChange = useCallback((e:ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);


	const value = {	
	    categorias:filteredCategorias as Categoria[],
        totalCategorias,
        isLoadingCategorias,
        errorCategorias,
        filterValue,
        setFilterValue,
        page,
        setPage, 
        pages,
        onRowsPerPageChange, 
        isEditingCategoriaSelected,
        handleChangeEditStatus,
        categoriaSelected,
        setCategoriaSelected,
        handleRegisterNewCategoria,
        isOpenModalRegister,
        onOpenModalRegister,
        onOpenChangeModalRegister,
        onCloseModalRegister,

        valuesNewCategoria,
        setValuesNewCategoria,
        handleChangeNewCategoria, 

        valuesEditCategoria,
        setValuesEditCategoria,
        handleChangeEditCategoria,

        selectedProducts: selectedDesvincularProducts,
        setSelectedProducts: setSelectedDesvincularProducts,

        handleEditCategoriaSelected
	};

  	return (
		<CategoriasContext.Provider value={value}>{children}</CategoriasContext.Provider>
	)
}

//Hook personalizado para consumir el contexto
export const useCategorias = () => {

	const context = useContext(CategoriasContext);

	if(!context) {
		throw new Error("UseCategorias debe ser utilizado dentro de un provider");
	}

	return context;

}