import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

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

      <nav
        className="nav"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          fontFamily: 'Open Sans',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Início</Link>
        <a href="#sobre" style={{ color: '#ffffff', textDecoration: 'none' }}>Sobre</a>
        <a href="#servicos" style={{ color: '#ffffff', textDecoration: 'none' }}>Serviços</a>
        <a href="#contato" style={{ color: '#ffffff', textDecoration: 'none' }}>Contato</a>
      </nav>

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
