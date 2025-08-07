import { useCart } from '../context/cartContext';

const CartItem = ({ item }) => {
  const { eliminarItem } = useCart();

  return (
    <div className="cart-item">
      <h4>{item.nombre}</h4>
      <p>Cantidad: {item.cantidad}</p>
      <p>Precio unitario: ${item.precio}</p>
      <p>Subtotal: ${item.precio * item.cantidad}</p>
      <button onClick={() => eliminarItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;