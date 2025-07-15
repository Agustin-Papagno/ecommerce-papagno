import ItemCount from './ItemCount';

const ItemDetail = ({ id, nombre, precio, categoria }) => {
  return (
    <div id='item-detail'>
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
