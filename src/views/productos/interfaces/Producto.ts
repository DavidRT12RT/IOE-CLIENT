export interface Productos {
    productos: Producto[];
}

export interface UnidadMedidaSat{
    id:string;
    unidad:string;
    descripcion:string;
}

export interface ClaveSat{
    id:string;
    clave:string;
    descripcion:string;
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
    costo:number;
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


export interface Producto {
    id:                  string;
    SKU:                 string;
    estatus:             Estatus;
    nombre:              string;
    descripcion:         string;
    usos:                any[];
    material:            null;
    color:               null;
    inventariable:       boolean;
    stock:               number;
    stock_minimo:        number;
    dias_reabasto:       number;
    costo_promedio:      number;
    unidad_compra:       UnidadCompra;
    unidad_venta:        UnidadVenta;
    metodo_reabasto:     MetodoReabasto;
    fecha_registro:      string;
    fecha_actualizacion: string;
    detalles:            Detalles;
    claveSat?:            ClaveSat;
    unidadMedidaSat?:     UnidadMedidaSat;
    productosAlmacen?:    ProductosAlmacen[];
    categoria?:           Categoria;
    provedorProductos?:   ProvedorProducto[];
}
export enum Estatus {
	ACTIVO = "ACTIVO",
	"NO ACTIVO" = "NO ACTIVO"
};

export enum UnidadCompra {
	PIEZA = "PIEZA",
	CAJA = "CAJA",
	PAQUETE = "PAQUETE"
};

export enum UnidadVenta {
	PIEZA = "PIEZA",
	CAJA = "CAJA",
	PAQUETE = "PAQUETE"
};

export enum MetodoReabasto {
	FIJO = "FIJO",
	RESURTIBLE = "RESURTIBLE"
};


export interface ClaveSat {
    id:          string;
    clave:       string;
    descripcion: string;
}

export interface Detalles {
}

export enum MetodoReabasto {
    Fijo = "FIJO",
    Resurtible = "RESURTIBLE",
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
    costo:    number;
    provedor: Provedor;
}

export enum CondicionesComerciale {
    Contado = "CONTADO",
    Credito = "CREDITO",
}


export interface UnidadMedidaSat {
    id:          string;
    unidad:      string;
    descripcion: string;
}
