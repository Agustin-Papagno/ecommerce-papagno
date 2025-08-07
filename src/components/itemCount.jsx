import { useState } from 'react';

const ItemCount = ({ onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div>
      <button onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 1}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => setCantidad(cantidad + 1)}>+</button>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;