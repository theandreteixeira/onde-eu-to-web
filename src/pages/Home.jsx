import { Helmet } from 'react-helmet-async';

import '../styles.css';


function getStoreUrl() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(ua)) {
    return "https://play.google.com/store/apps/details?id=com.ondeeu.to";
  }
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    return "https://apps.apple.com/br/app/onde-eu-tô/id6469823932";
  }
  return "https://play.google.com/store/apps/details?id=com.ondeeu.to";
}

export default function Home() {
  const handleStoreClick = (e) => {
    e.preventDefault();
    window.open(getStoreUrl(), "_blank");
  };

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
        <img src="/src/assets/icon_app.png" alt="Logo Onde Eu Tô" className="home-logo" />
        <div className="home-gradient" />
      </div>
  <h1 className="home-title">Onde Eu Tô?</h1>
  <h2 className="home-subtitle">O desafio geográfico mais divertido do Brasil</h2>
  <p className="home-desc">Adivinhe cidades, paisagens e cultura brasileira usando o Street View. Teste seus conhecimentos e explore o país sem sair de casa!</p>
  <div className="home-slogan">Descubra o Brasil sem sair de casa!</div>
      <div className="home-actions">
        <a href="#" className="home-btn" onClick={handleStoreClick}>Baixar o App</a>
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
