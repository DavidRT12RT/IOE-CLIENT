
export interface Provedores {
    provedores: Provedor[];
}

export interface Provedor {
    id:                     string;
    nombre:                 string;
    alias:                  null | string;
    RFC:                    string;
    telefono:               string;
    movil:                  null;
    correo:                 string;
    sitio_web:              null;
    etiquetas:              null;
    condicionesComerciales: CondicionesComerciales[];
    condicionesPago:        CondicionesPago[];
    tarifas:                string;
    recordatorio_recibo:    boolean;
    notas:                  string;
    tipoDePersona:          TipoDePersona;
    direcciones:            Direccion[];
    cuentasBancarias:       CuentasBancaria[];
    provedorProductos:      ProvedorProducto[];
}


export enum CondicionesComerciales {
    Contado = "CONTADO",
    Credito = "CREDITO",
}

export interface CuentasBancaria {
    id:            string;
    numero_cuenta: string;
    banco:         string;
    tipo:          string;
    CLABE:         string;
}



export interface Direccion {
    id:     string;
    calle:  string;
    estado: string;
    ciudad: string;
    CP:     string;
}



export interface ProvedorProducto {
    id:       string;
    producto: Producto;
}



export interface CuentaBancaria {
    id:            string;
    numero_cuenta: string;
    banco:         string;
    tipo:          string;
    CLABE:         string;
}


export interface Direccion {
    id:     string;
    calle:  string;
    estado: string;
    ciudad: string;
    CP:     string;
}


export enum CondicionesComerciales {
    CONTADO = "CONTADO",
    CREDITO = "CREDITO"
};


export enum TipoDePersona {
    MORAL = "MORAL",
    FISICA = "FISICA"
};

export enum CondicionesPago {
    PAGO_INMEDIATO = "PAGO_INMEDIATO",
    "15 DIAS" = "15 DIAS",
    "21 DIAS" = "21 DIAS",
    "30 DIAS" = "30 DIAS",
    "45 DIAS" = "45 DIAS",
    "FIN DE MES" = "FIN DE MES"
};
export interface ProvedorProducto {
    id:       string;
    producto: Producto;
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
    categoria:           Categoria;
    productosAlmacen:    ProductosAlmacen[];
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
