import React from 'react';

export function formatarTexto(texto) {
  return texto
    .split('\n\n') // quebra em parágrafos
    .map((paragrafo, i) => (
      <p
        key={i}
        style={{
          fontSize: '1.6rem',
          lineHeight: 1.6,
          fontFamily: 'Open Sans',
          marginBottom: '1.5rem'
        }}
      >
        {paragrafo.split('\n').map((linha, j) => (
          <React.Fragment key={j}>
            {linha}
            <br />
          </React.Fragment>
        ))}
      </p>
    ));
}
