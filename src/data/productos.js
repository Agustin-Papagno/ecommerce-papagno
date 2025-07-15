const productos = [
  { id: "1", nombre: "Notebook Lenovo", categoria: "laptops", precio: 450000 },
  { id: "2", nombre: "Mouse Logitech", categoria: "accesorios", precio: 15000 },
  { id: "3", nombre: "Monitor Samsung", categoria: "monitores", precio: 120000 },
  { id: "4", nombre: "Auriculares Sony", categoria: "audio", precio: 35000 },
  { id: "5", nombre: "Teclado Redragon", categoria: "accesorios", precio: 18000 },
];

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(productos), 500);
  });
};

export const getProductoPorId = (id) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(productos.find(p => p.id === id)), 500);
  });
};
