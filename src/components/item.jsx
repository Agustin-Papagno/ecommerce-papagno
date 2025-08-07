import { Link } from 'react-router-dom';

function Item({ producto }) {

  if (!producto) return null
  return (
    <div className="item-card">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} width={200} />
      <p>Precio: ${producto.precio}</p>
      <Link to={`/detalle/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
