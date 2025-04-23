import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Banner from './pages/Banner';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import FormularioCotacao from './pages/FormularioCotacao';
import Rodape from './components/Rodape';
import ScrollToTop from './components/ScrollToTop';
import PaginaServico from './pages/PaginaServico';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Página inicial completa */}
        <Route path="/" element={
          <>
            <Banner />
            <Sobre />
            <Servicos />
            <FormularioCotacao />
            <Rodape />
          </>
        } />

        {/* Página dinâmica para cada serviço */}
        <Route path="/servicos/:slug" element={<PaginaServico />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
