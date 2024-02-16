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
    productosAlmacen:    ProductosAlmacen[];
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


export interface ProductosAlmacen {
    id:                  string;
    stock:               number;
    fecha_registro:      string;
    fecha_actualizacion: string;
    almacen:             Categoria;
}
