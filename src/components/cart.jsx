import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const {
    cart,
    eliminarItem,
    vaciarCarrito,
    totalUnidades,
    totalPrecio
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className='empty-cart'>
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className='cart-card'>
      <h2>Tu carrito</h2>
      <ul>
        {cart.map(producto => (
          <li key={producto.id}>
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Subtotal: ${producto.precio * producto.cantidad}</p>
            <button onClick={() => eliminarItem(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h3>Total unidades: {totalUnidades()}</h3>
      <h3>Total a pagar: ${totalPrecio()}</h3>

      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
}

export default Cart;