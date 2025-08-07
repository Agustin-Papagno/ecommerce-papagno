import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig';
import ItemDetail from './itemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'productos', id);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Producto no encontrado");
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? <p>Cargando producto...</p> : <ItemDetail {...producto} />}
    </div>
  );
}

export default ItemDetailContainer;
