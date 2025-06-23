// src/App.jsx
import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Mi Tienda!" />
    </div>
  );
}

export default App;

