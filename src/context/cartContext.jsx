import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemExistente = cart.find(prod => prod.id === item.id);

    if (itemExistente) {
      const nuevoCart = cart.map(prod =>
        prod.id === item.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
      );
      setCart(nuevoCart);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const vaciarCarrito = () => setCart([]);

  const eliminarItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const totalUnidades = () => cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  const totalPrecio = () => cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

  return (
    <CartContext.Provider value={{
      cart,
      agregarAlCarrito,
      vaciarCarrito,
      eliminarItem,
      totalUnidades,
      totalPrecio
    }}>
      {children}
    </CartContext.Provider>
  );
}
