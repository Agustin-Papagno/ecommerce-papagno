import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../data/productos';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductoPorId(productoId).then(setProducto);
  }, [productoId]);

  return producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
