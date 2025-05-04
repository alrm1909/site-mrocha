import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarSubmenu, setMostrarSubmenu] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const servicos = [
    { titulo: 'Seguro Automóvel', slug: 'seguro-automovel' },
    { titulo: 'Seguro de Vida', slug: 'seguro-vida' },
    { titulo: 'Seguro de Vida para Funcionários', slug: 'seguro-vida-funcionarios' },
    { titulo: 'Plano de Saúde', slug: 'plano-saude' },
    { titulo: 'Plano Odontológico', slug: 'plano-odontologico' },
    { titulo: 'Seguro Residencial', slug: 'seguro-residencial' },
    { titulo: 'Seguro Condomínio', slug: 'seguro-condominio' },
    { titulo: 'Seguro de Equipamentos', slug: 'seguro-equipamentos' },
    { titulo: 'Seguro Empresarial', slug: 'seguro-empresarial' },
    { titulo: 'Seguro de Frota', slug: 'seguro-frota' },
    { titulo: 'Seguro de Responsabilidade Civil', slug: 'seguro-responsabilidade-civil' },
    { titulo: 'Seguro Viagem', slug: 'seguro-viagem' },
  ];

  return (
    <header
      style={{
        backgroundColor: '#111522',
        padding: '2rem 1rem 1rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Ícones sociais */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1.5rem',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <a href="https://www.instagram.com/mrochaseg" target="_blank" rel="noreferrer">
          <FaInstagram color="#fff" size={20} />
        </a>
        <a href="#" title="Facebook">
          <FaFacebook color="#fff" size={20} />
        </a>
        <a
          href="https://linktr.ee/mrochaseg"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin color="#fff" size={20} />
        </a>
      </div>

      <img src={logo} alt="Logo" style={{ height: '100px', marginBottom: '1rem' }} />

      <p
        style={{
          fontSize: '1rem',
          margin: '0.5rem 0 1rem',
          color: '#ffffff',
          fontFamily: 'Open Sans',
        }}
      >
        O custo do cuidado é sempre menor do que o custo do reparo!
      </p>

      {/* Botão para mobile */}
      <button
        onClick={toggleMenu}
        style={{
          background: 'none',
          color: '#fff',
          border: 'none',
          fontSize: '2rem',
          display: 'none',
          cursor: 'pointer',
        }}
        className="menu-toggle"
      >
        ☰
      </button>

      {/* Navegação */}
      <nav
        className="nav"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          fontFamily: 'Open Sans',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
          position: 'relative',
        }}
      >
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Início</Link>
        <a href="#sobre" style={{ color: '#ffffff', textDecoration: 'none' }}>Sobre</a>

        {/* Menu Serviços com dropdown */}
        <div
          style={{ position: 'relative' }}
          onMouseEnter={() => setMostrarSubmenu(true)}
          onMouseLeave={() => setMostrarSubmenu(false)}
        >
          <a href="#servicos" style={{ color: '#ffffff', textDecoration: 'none' }}>Serviços</a>

          {mostrarSubmenu && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)', // ✅ centraliza
                backgroundColor: 'rgba(255,255,255,0.85)',
                color: '#000',
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                minWidth: '240px',
                zIndex: 1000,
              }}
            >
              {servicos.map(({ titulo, slug }) => (
                <Link
                  key={slug}
                  to={`/servicos/${slug}`}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    borderBottom: '1px solid #eee',
                    textDecoration: 'none',
                    color: '#000',
                  }}
                >
                  {titulo}
                </Link>
              ))}
            </div>
          )}
        </div>

        <a href="#contato" style={{ color: '#ffffff', textDecoration: 'none' }}>Contato</a>
      </nav>

      {/* Estilos responsivos */}
      <style>
        {`
          @media (max-width: 768px) {
            .nav {
              flex-direction: column;
              align-items: center;
              display: ${menuAberto ? 'flex' : 'none'};
            }
            .menu-toggle {
              display: block;
              margin: 0 auto 1rem;
            }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
