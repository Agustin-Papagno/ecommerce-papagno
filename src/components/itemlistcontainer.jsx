import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos } from '../data/productos';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((data) => {
      if (categoriaId) {
        setProductos(data.filter(prod => prod.categoria === categoriaId));
      } else {
        setProductos(data);
      }
    });
  }, [categoriaId]);

  return (
    <div>
      <h2>{categoriaId ? `Productos de categoría: ${categoriaId}` : 'Todos los productos'}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;

