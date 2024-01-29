export default function ProductoBasicInformation(){
    return (                    
        <div className="productoBasicInformation">
            <h1 className="text-5xl lg:text-6xl font-extrabold font-playfair">Vinimex® Antibacterial 4 Litros</h1>
            <div className="grid grid-cols-2 gap-2 mt-5 px-6">
                <p className="font-bold">Material:</p><p className="text-gray-500">Petroleo</p>
                <p className="font-bold">Color:</p><p className="text-gray-500">Blanco</p>
                <p className="font-bold">Stock:</p><p className="text-gray-500">400</p>
                <p className="font-bold">Categoria:</p><p className="text-gray-500">Vinilos</p>
                <p className="font-bold">Almacen:</p><p className="text-gray-500">0001</p>
            </div>
            <p className="text-gray-500 text-sm text-center mt-5">Para mas informacion acerca del producto contactar al encagado de almacen</p>
        </div>
    );
}