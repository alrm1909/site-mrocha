import React, { useEffect, useState } from 'react';
import foto1 from '../assets/foto1.jpeg';

function Sobre() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="sobre"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 0,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'stretch',
          gap: '0',
        }}
      >
        {/* Imagem */}
        <div
          style={{
            flex: isMobile ? 'unset' : '0 0 40%',
            minWidth: isMobile ? '100%' : '320px',
            maxWidth: isMobile ? '100%' : '500px',
            height: isMobile ? 'auto' : '100%',
            display: 'flex',
          }}
        >
          <img
            src={foto1}
            alt="Sobre"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
	            borderRadius: 0,
            }}
          />
        </div>

        {/* Texto */}
        <div
          style={{
            flex: '1',
            padding: isMobile ? '2rem 0' : '2rem 0 2rem 0',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              fontFamily: 'Open Sans',
              fontSize: '1.1rem',
              color: '#111',
              lineHeight: 1.6,
              textAlign: 'justify',
              paddingLeft: isMobile ? '1rem' : '2rem',
              paddingRight: isMobile ? '1rem' : '2rem', // ✅ novo espaçamento interno à esquerda
            }}
          >
            <p>
              Sou Amábili Rocha, formada em Administração de Empresas e Pós-Graduada em Gestão Estratégica de Negócios. Sou apaixonada pelo universo dos seguros e, por mais de 10 anos, tive o privilégio de atuar em uma das maiores seguradoras da América Latina.
            </p>
            <p>
              Essa experiência me proporcionou um profundo conhecimento do mercado segurador e reforçou ainda mais meu propósito: proteger o que é valioso para as pessoas.
            </p>
            <p>
              Sou casada, mãe e amante da natureza — acredito que a vida é feita de conexões, cuidado e equilíbrio.
            </p>
            <p>
              Foi justamente esse amor por cuidar que me motivou a dar um passo além e abrir minha própria corretora de seguros. Aqui, o compromisso é oferecer muito mais do que serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
