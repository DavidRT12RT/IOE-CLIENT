export interface Inventario {
    id:                                 string;
    nombre_inventario:                  string;
    descripcion:                        string;
    observaciones:                      any[];
    estatus:                            boolean;
    importe_ajustado:                   number;
    cantidad_total_articulos_ajustados: number;
    articulos_ajustados:                number;
    articulos_contados:                 number;
    tipo_inventario:                    string;
    fecha_registro:                     string;
    fecha_actualizacion:                string;
    detalles:                           Detalle[];
    sucursal:                           Sucursal;
    productos:                          Producto[];
    supervisor:                         Supervisor;
}

export interface Detalle {
    almacenes:  Almacen[];
    productoId: string;
}

export interface Almacen {
    almacenId:        string;
    cantidad_contada: number;
}

export interface AlmacenSucursal {
    id:string;
    nombre:string;
    descripcion:string;
    tipo_almacen:string;
    fecha_registro:Date;
    fecha_actualizacion:Date;
};

export interface Producto {
    id:                  string;
    nombre:              string;
    descripcion:         string;
    usos:                any[];
    material:            null;
    color:               null;
    inventariable:       boolean;
    stock:               number;
    stock_minimo:        number;
    costo_promedio:      number;
    fecha_registro:      string;
    fecha_actualizacion: string;
    categoria:           Categoria;
}

export interface Categoria {
    id:                  string;
    nombre:              string;
    descripcion:         string;
    fecha_registro:      string;
    fecha_actualizacion: string;
    tipo_almacen?:       string;
}



export interface Sucursal {
    id:                  string;
    zona:                string;
    ciudad:              string;
    calle:               string;
    fecha_registro:      string;
    fecha_actualizacion: string;
    almacenes:           Categoria[];
}

export interface Supervisor {
    id:                  string;
    nombre:              string;
    apellido_materno:    string;
    apellido_paterno:    string;
    correo:              string;
    telefono:            string;
    activo:              boolean;
    fecha_registro:      string;
    fecha_actualizacion: string;
}
