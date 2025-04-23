import React from 'react';

function Rodape() {
  return (
    <footer style={{
      backgroundColor: '#111522',
      color: '#ffffff',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontFamily: 'Open Sans',
      fontSize: '0.9rem'
    }}>
      <p>CNPJ: 12.345.678/0001-99</p>
      <p>
        <a href="#termos" style={linkStyle}>Termos de Uso</a> |{' '}
        <a href="#privacidade" style={linkStyle}>Política de Privacidade</a> |{' '}
        <a href="#contato" style={linkStyle}>Fale Conosco</a>
      </p>
      <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} M Rocha Corretora de Seguros. Todos os direitos reservados.
      </p>
    </footer>
  );
}

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'underline',
  margin: '0 0.3rem'
};

export default Rodape;
