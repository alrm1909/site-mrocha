import React from 'react';
import foto1 from '../assets/foto1.jpeg';
import { formatarTexto } from '../formatarTexto';

const texto = `Sou Amábili Rocha, formada em Administração de Empresas e Pós Graduada em Gestão Estratégica de Negócios. Sou apaixonada pelo universo dos seguros e, por mais de 10 anos, tive o privilégio de atuar em uma das maiores seguradoras da América Latina. Essa experiência me proporcionou um profundo conhecimento do mercado segurador e reforçou ainda mais meu propósito: proteger o que é valioso para as pessoas.\n
              Sou casada, mãe e amante da natureza — acredito que a vida é feita de conexões, cuidado e equilíbrio. Foi justamente esse amor por cuidar que me motivou a dar um passo além e abrir minha própria corretora de seguros.\n
              Aqui, o compromisso é oferecer muito mais do que serviços. Quero ser uma parceira de confiança, ajudando você a construir segurança e tranquilidade em todas as fases da sua vida.`;

function Sobre() {
  return (
    <section
  id="sobre"
  style={{
    display: 'flex',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  }}
>
  {/* Lado da imagem */}
  <div
    style={{
      flex: '0 0 auto',
      width: 'auto',
      height: '100vh',
      backgroundColor: '#fff' // força fundo branco na imagem
    }}
  >
    <img
      src={foto1}
      alt="Sobre"
      style={{
        height: '100%',
        objectFit: 'contain',
        display: 'block',
        borderRadius: 0 // remove arredondamento
      }}
    />
  </div>

  {/* Lado do texto */}
  <div
    style={{
      flex: '1 1 0%',
      backgroundColor: '#fff',
      color: '#111',
      padding: '3rem',
      overflowY: 'auto',
      height: '100vh',
      boxSizing: 'border-box'
    }}
  >
    <h2
      style={{
        color: '#B59876',
        fontSize: '2.0rem',
        fontFamily: 'Open Sans',
        marginBottom: '1rem'
      }}
    >
      Quem sou eu?
    </h2>
    <p
      style={{
        fontSize: '1.6rem',
        lineHeight: 1.6,
        fontFamily: 'Open Sans'
      }}
    >
      {/* Conteúdo do texto */}
      {formatarTexto(texto)}
    </p>
  </div>
</section>

    
  );
}

export default Sobre;
