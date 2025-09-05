import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="card">
      <Helmet>
        <title>Termos de Uso — Onde Eu Tô?</title>
        <meta name="description" content="Termos de Uso do aplicativo Onde Eu Tô?." />
      </Helmet>
      <h1>Termos de Uso</h1>
      <p>Última atualização: 05/09/2025</p>

      <h2>1. Sobre o app</h2>
      <p><strong>Onde Eu Tô?</strong> é um jogo mobile em que você observa uma cena no Street View e tenta adivinhar o local no mapa. O app utiliza APIs do Google (Maps/Street View).</p>

      <h2>2. Conta e idade</h2>
      <ul>
        <li>Para usar recursos online (ranking, progresso), pode ser necessário criar conta ou autenticar via Google/Apple/Facebook.</li>
        <li>Você declara ser maior de 13 anos (ou conforme legislação local) e responsável por sua conta.</li>
      </ul>

      <h2>3. Regras de uso</h2>
      <ul>
        <li>Não tente burlar sistemas de pontos, anúncios ou segurança.</li>
        <li>Não use o app para atividades ilegais, assédio ou violação de direitos.</li>
      </ul>

      <h2>4. Conteúdo de terceiros</h2>
      <p>As imagens do Street View pertencem ao Google e estão sujeitas aos termos dele. Podemos exibir anúncios de parceiros.</p>

      <h2>5. Dados e privacidade</h2>
      <p>Veja a <a href="/privacidade">Política de Privacidade</a> para entender como tratamos dados.</p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>O app é fornecido “no estado em que se encontra”. Não garantimos disponibilidade contínua. Não nos responsabilizamos por perdas emergentes do uso.</p>

      <h2>7. Alterações</h2>
      <p>Podemos atualizar estes Termos a qualquer momento. A versão vigente é a publicada neste site.</p>

      <h2>8. Contato</h2>
      <p>E-mail de contato: suporte@seu-dominio.com</p>
    </div>
  );
}
