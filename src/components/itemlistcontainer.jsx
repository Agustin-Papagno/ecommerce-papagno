import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    fontSize: '24px',
  };

  return (
    <div style={containerStyle}>
      <h3>{greeting}</h3>
    </div>
  );
};

export default ItemListContainer;
