import { useEffect } from 'react';

export default function Institutional() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Institucional — Onde Eu Tô?';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="card">
      <h1>Institucional</h1>
      <p>
        <em>Sobre o projeto Onde Eu Tô?</em>
      </p>

      <h2>Visão</h2>
      <p>
        O <strong>Onde Eu Tô?</strong> é um jogo mobile inovador que combina
        entretenimento, geografia e tecnologia imersiva. Inspirado em jogos
        globais como GeoGuessr, mas com foco exclusivo no Brasil, o app coloca o
        usuário dentro do Google Street View e desafia sua habilidade de
        reconhecer lugares reais, do Oiapoque ao Chuí.
      </p>

      <h2>Problema</h2>
      <p>
        O público brasileiro carece de experiências de jogos que valorizem a
        cultura e a diversidade local. A maioria das opções do gênero traz mapas
        mundiais, sem profundidade no Brasil, o que cria uma barreira para quem
        deseja uma experiência mais próxima de sua realidade.
      </p>

      <h2>Solução</h2>
      <ul>
        <li>
          Rodadas rápidas onde o jogador precisa identificar locais reais no
          mapa.
        </li>
        <li>Sistema de pontuação baseado na precisão da localização.</li>
        <li>
          Progressão por níveis com centenas de mapas do território brasileiro.
        </li>
        <li>
          Recursos sociais e competitivos, como rankings globais e, futuramente,
          multiplayer entre amigos.
        </li>
      </ul>

      <h2>Mercado</h2>
      <ul>
        <li>
          O Brasil é o 4º maior mercado de games do mundo, com mais de{' '}
          <strong>100 milhões de jogadores</strong>.
        </li>
        <li>
          Jogos casuais e educativos têm alto engajamento no mobile,
          especialmente entre jovens adultos.
        </li>
        <li>
          Modelo baseado em anúncios e, futuramente, microtransações, com
          potencial de monetização escalável.
        </li>
      </ul>

      <h2>Diferenciais</h2>
      <ul>
        <li>Conteúdo 100% localizado no Brasil.</li>
        <li>Interface acessível, divertida e de rápida aprendizagem.</li>
        <li>
          Possibilidade de expansão para outros países e modos multiplayer.
        </li>
      </ul>

      <h2>Modelo de Negócio</h2>
      <ul>
        <li>
          Receita inicial via <strong>Google AdMob</strong> (banners e
          intersticiais).
        </li>
        <li>
          Futuro: recursos premium, modos competitivos e pacotes de mapas
          exclusivos.
        </li>
      </ul>

      <h2>Próximos Passos</h2>
      <ul>
        <li>Lançamento da versão 1.0 com foco em single player.</li>
        <li>Implementação de ranking global e eventos sazonais.</li>
        <li>Versão 2.0 com partidas multiplayer online entre amigos.</li>
      </ul>

      <h2>Contato / Imprensa</h2>
      <p>Para dúvidas, parcerias ou imprensa, entre em contato:</p>
      <ul>
        <li>
          <strong>E-mail:</strong> andredesenvolvimento09@gmail.com
        </li>
        <li>
          <strong>Site oficial:</strong>{' '}
          <a href="https://ondeeuto.online" target="_blank" rel="noreferrer">
            ondeeuto.online
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>{' '}
          <a
            href="https://instagram.com/theandreteixeira"
            target="_blank"
            rel="noreferrer"
          >
            @theandreteixeira
          </a>
        </li>
      </ul>
    </div>
  );
}
