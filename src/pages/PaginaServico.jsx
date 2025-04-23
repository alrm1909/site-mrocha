import { useParams } from 'react-router-dom';
import servicosData from '../data/servicosData';

function PaginaServico() {
  const { slug } = useParams();
  const servico = servicosData[slug];

  if (!servico) {
    return (
      <div style={{ padding: '4rem', fontFamily: 'Open Sans', color: '#111' }}>
        Serviço não encontrado.
      </div>
    );
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#fff',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('${servico.imagem}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        padding: '1rem 2rem 5rem',
        fontFamily: 'Open Sans',
        color: '#111',
        textAlign: 'center',
      }}
    >
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <h2 style={{
          color: '#B59876',
          fontFamily: 'Playfair Display',
          fontSize: '2.4rem',
          marginBottom: '1rem'
        }}>
          {servico.titulo}
        </h2>

        {servico.descricao
            .split('\n\n') // divide por parágrafos (dupla quebra)
            .map((bloco, blocoIndex) => (
                <p
                    key={blocoIndex}
                    style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                        whiteSpace: 'pre-line' // 🔹 permite renderizar \n dentro do parágrafo
                    }}
                >
                    {bloco}
                </p>
        ))}

        <a
          href={`https://wa.me/5547999999999?text=${encodeURIComponent(`Olá, gostaria de uma cotação sobre: ${servico.titulo}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#B59876',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          Solicitar Cotação via WhatsApp
        </a>
      </div>
    </section>
  );
}

export default PaginaServico;
