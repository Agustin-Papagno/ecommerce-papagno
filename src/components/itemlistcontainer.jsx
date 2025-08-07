import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productosRef = collection(db, 'productos');

    const consulta = categoriaId
      ? query(productosRef, where('categoria', '==', categoriaId))
      : productosRef;

    getDocs(consulta).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(docs);
    });
  }, [categoriaId]);

  return (
    <div>
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : 'Todos los productos'}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
