import { useState } from 'react';

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div>
      <button onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 1}>-</button>
      <span style={{ margin: '0 10px' }}>{cantidad}</span>
      <button onClick={() => setCantidad(cantidad + 1)}>+</button>
      <button onClick={() => alert(`Agregado ${cantidad} al carrito`)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
