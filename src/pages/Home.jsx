import { Helmet } from 'react-helmet-async';

import '../styles.css';


export default function Home() {
  return (
    <div className="home-hero">
      <Helmet>
        <title>Onde Eu Tô? — Página oficial</title>
        <meta name="description" content="Jogo mobile brasileiro para adivinhar locais no Street View." />
        <meta property="og:title" content="Onde Eu Tô?" />
        <meta property="og:description" content="Adivinhe o local no mapa usando o Street View." />
      </Helmet>
      <div className="home-bg-animated" />
      <div className="home-graphic">
        <img src="/src/assets/logo.svg" alt="Logo Onde Eu Tô" className="home-logo" />
        <div className="home-gradient" />
      </div>
      <h1 className="home-title">Onde Eu Tô?</h1>
      <p className="home-desc">Jogo mobile brasileiro para adivinhar locais no Street View.</p>
      <div className="home-slogan">Descubra o Brasil sem sair de casa!</div>
      <div className="home-actions">
        <a href="https://play.google.com/store/apps/details?id=com.ondeeu.to" target="_blank" rel="noopener" className="home-btn">Baixar o App</a>
        <a href="/termos" className="home-link">Termos de Uso</a>
        <a href="/privacidade" className="home-link">Política de Privacidade</a>
      </div>
      <div className="home-avatar">
        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=ondeeuto" alt="Avatar" />
      </div>
      <div className="home-info">
        <span>Site oficial do jogo</span>
      </div>
    </div>
  );
}
