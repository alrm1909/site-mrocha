import React from 'react';
import foto1 from '../assets/foto1.jpeg';

function Sobre() {
  return (
    <section id="sobre" style={{
      display: 'flex',
      width: '100%',
      height: '500px',
      margin: 0,
      padding: 0,
    }}>
      {/* Lado da imagem (real <img>) */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <img
          src={foto1}
          alt="Sobre"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      {/* Lado do texto */}
      <div style={{
        flex: 1,
        backgroundColor: '#fff',
        color: '#111',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
      }}>
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ color: '#B59876', fontFamily: 'Open Sans', fontSize: '1.8rem' }}>Quem sou eu?</h2>
          <p style={{ lineHeight: 1.6, fontFamily: 'Open Sans' }}>
            Sou Amábili Rocha, formada em Administração de Empresas e Pós Graduada em Gestão Estratégica de Negócios. Sou apaixonada pelo universo dos seguros e, por mais de 10 anos, tive o privilégio de atuar em uma das maiores seguradoras da América Latina. Essa experiência me proporcionou um profundo conhecimento do mercado segurador e reforçou ainda mais meu propósito: proteger o que é valioso para as pessoas.

            Sou casada, mãe e amante da natureza — acredito que a vida é feita de conexões, cuidado e equilíbrio. Foi justamente esse amor por cuidar que me motivou a dar um passo além e abrir minha própria corretora de seguros.

            Aqui, o compromisso é oferecer muito mais do que serviços. Quero ser uma parceira de confiança, ajudando você a construir segurança e tranquilidade em todas as fases da sua vida.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
