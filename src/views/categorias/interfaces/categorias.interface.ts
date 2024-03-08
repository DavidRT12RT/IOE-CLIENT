import { Producto } from "../../productos/interfaces/Producto";

export interface Categorias {
    categorias: Categoria[];
}

export interface Categoria {
    id:                  string;
    nombre:              string;
    descripcion:         string;
    fecha_registro:      string;
    fecha_actualizacion: string;
    productos:           Producto[];
    categoria_padre:Categoria;
    categorias_hija:Categoria[];
    usuarioCreador:Usuario
}


interface Usuario {
    id:string;
    nombre:string;
    apellido_materno:string;
    apellido_paterno:string;
    correo:string;
    telefono:string;
    activo:boolean;
    fecha_registro:Date;
    fecha_actualizacion:Date;
};