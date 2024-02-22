export interface Inventarios {
    inventarios: Inventario[];
}

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
    supervisor:                         Supervisor;
    productos:                          Producto[];
    sucursal:                           Sucursal;
}

export interface Detalle {
    almacenes:  AlmacenDetalle[];
    productoId: string;
}

export interface AlmacenDetalle {
    almacenId:        string;
    cantidad_contada: number;
}

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
    categoria:           any;
}

export interface Almacen {
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
    almacenes:           Almacen[];
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
