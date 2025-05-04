import React, { useState } from 'react';

function FormularioCotacao() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const numeroWhatsapp = '5548992072727';

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto =
      `Olá, meu nome é ${nome}.\n` +
      `Gostaria de solicitar uma cotação.\n` +
      `Meu telefone: ${telefone}\n` +
      `Detalhes: ${mensagem}`;

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contato"
      style={{
        padding: '0 0 2rem 0',
        backgroundColor: '#fff',
        fontFamily: 'Open Sans',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <input
          type="text"
          placeholder="Nome completo"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Telefone"
          required
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Mensagem ou tipo de seguro desejado"
          rows="5"
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          style={inputStyle}
        ></textarea>
        <button type="submit" style={buttonStyle}>
          Solicitar Cotação via WhatsApp
        </button>
      </form>
    </section>
  );
}

const inputStyle = {
  padding: '0.75rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.75rem',
  backgroundColor: '#B89B72',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default FormularioCotacao;
