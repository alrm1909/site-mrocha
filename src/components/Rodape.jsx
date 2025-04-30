import React from 'react';

function Rodape() {
  return (
    <footer
      style={{
        backgroundColor: '#111522',
        color: '#ffffff',
        padding: '2rem 1rem',
        textAlign: 'center',
        fontFamily: 'Open Sans',
        fontSize: '0.9rem',
      }}
    >
      {/* CNPJ */}
      <p style={{ margin: '0 0 0.5rem' }}>CNPJ: 58.857.153/0001-30</p>

      {/* WhatsApp + SUSEP */}
      <p style={{ margin: '0 0 0.5rem' }}>
        <a
          href="https://wa.me/5548992072727"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#ffffff',
            textDecoration: 'none',
            marginRight: '8px'
          }}
        >
          <img
            src="/whatsapp-icon.png"
            alt="WhatsApp"
            style={{
              width: '16px',
              height: '16px',
              verticalAlign: 'middle',
              marginRight: '6px'
            }}
          />
          (48) 99207-2727
        </a>
        | SUSEP: 252166899
      </p>

      {/* Direitos autorais */}
      <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} M Rocha Corretora de Seguros. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Rodape;
