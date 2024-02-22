export interface Productos {
    productos: Producto[];
}

export interface Producto {
    id:                  string;
    nombre:              string;
    status:              boolean;
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
    provedorProductos:   ProvedorProducto[];
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

export interface ProvedorProducto {
    id:       string;
    provedor: Provedor;
}

export interface Provedor {
    id:                     string;
    nombre:                 string;
    alias:                  string | null;
    RFC:                    string;
    telefono:               string;
    movil:                  null;
    correo:                 string;
    sitio_web:              null;
    etiquetas:              null;
    condicionesComerciales: CondicionesComerciales[];
    condicionesPago:        CondicionesPago[];
    tarifas:                string[];
    recordatorio_recibo:    boolean;
    notas:                  string;
    tipoDePersona:          TipoDePersona;
}

export enum CondicionesComerciales {
    Contado = "CONTADO",
    Credito = "CREDITO",
}

export enum CondicionesPago {
    The15Dias = "15 DIAS",
    The21Dias = "21 DIAS",
    The45Dias = "45 DIAS",
}


export enum TipoDePersona {
    MORAL = "MORAL",
    FISICA = "FISICA"
}
