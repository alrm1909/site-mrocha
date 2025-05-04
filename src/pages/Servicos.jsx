import React from 'react';
import { Link } from 'react-router-dom';
import servicosData from '../data/servicosData';

const listaServicos = Object.entries(servicosData);

function Servicos() {
  return (
    <section
      id="servicos"
      style={{
        width: '100%',
        backgroundColor: '#fff',
        padding: '0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '0px',
            width: '100%',
          }}
        >
          {listaServicos.map(([slug, servico]) => (
            <Link
              to={`/servicos/${slug}`}
              key={slug}
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 9',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: 0,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    background: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    padding: '0.7rem',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  {servico.titulo}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicos;
