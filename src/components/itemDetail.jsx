import ItemCount from './ItemCount';
import { useCart } from '../context/cartContext';

const ItemDetail = ({ id, nombre, precio, imagen, descripcion }) => {
  const { agregarAlCarrito } = useCart();

  const handleAgregar = (cantidad) => {
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
    alert('Producto agregado al carrito');
  };

  return (
    <div className="item-detail">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} />
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <ItemCount onAdd={handleAgregar} />
    </div>
  );
};

export default ItemDetail;
