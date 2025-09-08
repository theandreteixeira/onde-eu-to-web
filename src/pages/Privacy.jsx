import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="card">
      <Helmet>
        <title>Política de Privacidade — Onde Eu Tô?</title>
        <meta name="description" content="Política de Privacidade do aplicativo Onde Eu Tô?." />
      </Helmet>
      <h1>Política de Privacidade</h1>
      <p>Última atualização: 08/05/2025</p>

      <h2>1. Controlador</h2>
      <p>Este app é operado por Onde Eu Tô?, contato: andredesenvolvimento09@gmail.com.</p>

      <h2>2. Dados coletados</h2>
      <ul>
        <li>Dados de conta (e-mail, UID) quando você faz login (Google/Apple/Facebook).</li>
        <li>Dados de uso (eventos de gameplay, pontuação, erros) via Firebase Analytics/Crashlytics.</li>
        <li>Identificadores para anúncios (se ativados), conforme políticas do Google/Meta.</li>
      </ul>

      <h2>3. Finalidades</h2>
      <ul>
        <li>Fornecer e melhorar a experiência de jogo (ranking, progresso, balanceamento).</li>
        <li>Correção de bugs e segurança (Crashlytics).</li>
        <li>Medição e exibição de anúncios (se aplicável).</li>
      </ul>

      <h2>4. Compartilhamento</h2>
      <p>Compartilhamos dados com provedores como Google Firebase (Analytics/Crashlytics), AdMob e parceiros de autenticação, apenas para as finalidades acima.</p>

      <h2>5. Retenção</h2>
      <p>Manteremos os dados pelo tempo necessário às finalidades ou conforme exigido por lei.</p>

      <h2>6. Direitos</h2>
      <p>Você pode solicitar acesso, correção ou exclusão de dados pelo e-mail acima.</p>

      <h2>7. Consentimento e menores</h2>
      <p>Quando exigido (ex.: UE), exibiremos telas de consentimento. O app não é destinado a menores de 13 anos sem consentimento dos responsáveis.</p>

      <h2>8. Cookies e identificadores</h2>
      <p>Podemos usar cookies/ID de publicidade para analytics e ads. Você pode desativar anúncios personalizados nas configurações do dispositivo.</p>

      <h2>9. Alterações</h2>
      <p>Política poderá ser atualizada; consulte sempre esta página.</p>
    </div>
  );
}
