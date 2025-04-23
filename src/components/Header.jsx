import { Link } from 'react-router-dom'; // adicione no topo
import React from 'react';
import logo from '../assets/logo.png';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Header() {
  return (
    <header style={{
      backgroundColor: '#111522',
      textAlign: 'center',
      padding: '2rem 1rem 0.5rem',
      position: 'relative'
    }}>
      {/* Ícones no topo direito - alterar de top para botton para inferior direito */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1.5rem',
        display: 'flex',
        gap: '1rem'
      }}>
        <a href="https://www.instagram.com/mrochaseg" target="_blank" rel="noreferrer">
          <FaInstagram color="#fff" size={20} />
        </a>
        <a href="#" title="Facebook">
          <FaFacebook color="#fff" size={20} />
        </a>
        <a href="#" title="LinkedIn">
          <FaLinkedin color="#fff" size={20} />
        </a>
      </div>

      <img src={logo} alt="Logo" style={{ height: '100px', marginBottom: '1rem' }} />

      <p style={{
        fontSize: '1rem',
        margin: '0.5rem 0 1rem',
        color: '#ffffff',
        fontFamily: 'Open Sans'
      }}>
        Protegendo o que realmente importa.
      </p>

      <nav style={{
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        fontFamily: 'Open Sans',
        fontSize: '0.8rem'
      }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Início</Link>
        <a href="#sobre" style={{ color: '#ffffff', textDecoration: 'none' }}>Sobre</a>
        <a href="#servicos" style={{ color: '#ffffff', textDecoration: 'none' }}>Serviços</a>
        <a href="#contato" style={{ color: '#ffffff', textDecoration: 'none' }}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;
