import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="card">
      <Helmet>
        <title>Onde Eu Tô? — Página oficial</title>
        <meta name="description" content="Jogo mobile brasileiro para adivinhar locais no Street View." />
        <meta property="og:title" content="Onde Eu Tô?" />
        <meta property="og:description" content="Adivinhe o local no mapa usando o Street View." />
      </Helmet>
      <h1>Onde Eu Tô?</h1>
      <p>Este site hospeda os Termos de Uso e a Política de Privacidade exigidos por Google/Facebook.</p>
      <p>Use o menu acima para acessar as páginas.</p>
    </div>
  );
}
