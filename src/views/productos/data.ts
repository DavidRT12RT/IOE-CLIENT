interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  categoriaPadre: string; // Nombre de la categoría padre
  categoriasHijas: Categoria[]; // Array de categorías hijas
}

const categoriasPrueba: Categoria[] = [
  {
    id: "1",
    nombre: "Electrónicos",
    descripcion: "Productos electrónicos",
    categoriaPadre: "", // Categoría principal, no tiene una categoría padre
    categoriasHijas: [], // No hay categorías hijas
  },
  {
    id: "2",
    nombre: "Ropa",
    descripcion: "Ropa y accesorios",
    categoriaPadre: "", // Categoría principal, no tiene una categoría padre
    categoriasHijas: [], // No hay categorías hijas
  },
  {
    id: "3",
    nombre: "Laptops",
    descripcion: "Laptops y computadoras portátiles",
    categoriaPadre: "Electrónicos", // Categoría principal: Electrónicos
    categoriasHijas: [], // No hay categorías hijas
  },
  {
    id: "4",
    nombre: "Camisetas",
    descripcion: "Camisetas de moda",
    categoriaPadre: "Ropa", // Categoría principal: Ropa
    categoriasHijas: [], // No hay categorías hijas
  },
  {
    id: "5",
    nombre: "Smartphones",
    descripcion: "Teléfonos inteligentes",
    categoriaPadre: "Electrónicos", // Categoría principal: Electrónicos
    categoriasHijas: [
      {
        id: "6",
        nombre: "Android",
        descripcion: "Smartphones con sistema operativo Android",
        categoriaPadre: "Smartphones", // Categoría principal: Smartphones
        categoriasHijas: [], // No hay categorías hijas
      },
      {
        id: "7",
        nombre: "iOS",
        descripcion: "Smartphones con sistema operativo iOS",
        categoriaPadre: "Smartphones", // Categoría principal: Smartphones
        categoriasHijas: [], // No hay categorías hijas
      },
    ],
  },
];

export { Categoria, categoriasPrueba };

