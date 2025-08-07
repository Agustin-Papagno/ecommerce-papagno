import { useState } from 'react';
import { useCart } from '../context/cartContext';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Checkout = () => {
  const { cart, totalPrecio, vaciarCarrito } = useCart();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [ordenId, setOrdenId] = useState(null);
  const [datosComprador, setDatosComprador] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comprador = { nombre, email };
    const orden = {
      comprador,
      items: cart,
      total: totalPrecio(),
      fecha: new Date(),
    };

    const db = getFirestore();
    const ordenesRef = collection(db, 'ordenes');

    try {
      const docRef = await addDoc(ordenesRef, orden);
      setOrdenId(docRef.id);
      setDatosComprador(comprador);
      vaciarCarrito();
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };

  return (
    <div className='checkout-card'>
      <h2>Finalizar compra</h2>
      {ordenId ? (
        <div>
          <p>¡Gracias por tu compra!</p>
          <p><strong>Número de orden:</strong> {ordenId}</p>
          <p><strong>Nombre:</strong> {datosComprador?.nombre}</p>
          <p><strong>Email:</strong> {datosComprador?.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Confirmar compra</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;

