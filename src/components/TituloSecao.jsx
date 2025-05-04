import React from 'react';

function TituloSecao({ texto, bg = '#fff' }) {
  return (
    <div
      className="container"
      style={{
        padding: '2rem 0 2rem 0', // 4rem 0 2rem 0
        backgroundColor: '#ffffff', // ✅ COR DE FUNDO AQUI
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          color: '#B59876',
          fontFamily: 'Open Sans',
          textAlign: 'center',
          margin: 0,
        }}
      >
        {texto}
      </h2>
    </div>
  );
}

export default TituloSecao;
