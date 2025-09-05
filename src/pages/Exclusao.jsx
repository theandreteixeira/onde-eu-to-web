
export default function DeleteAccount() {
  const supportEmail = 'andredesenvolvimento09@gmail.com';

  return (
    <div className="card">
      <h1>Exclusão de Dados</h1>
      <p><em>Última atualização: 05/09/2025</em></p>

      <p>
        Esta página explica como você pode solicitar a <strong>exclusão dos seus dados pessoais</strong> relacionados ao aplicativo
        <strong> Onde Eu Tô?</strong>. Seguimos as políticas do Facebook Login e as legislações aplicáveis (como a LGPD).
      </p>

      <h2>O que pode ser excluído</h2>
      <ul>
        <li>Dados de conta (UID, nome exibido, e-mail de login).</li>
        <li>Progresso de jogo (níveis, pontuações, histórico de partidas).</li>
        <li>Identificadores de dispositivos/analytics associados à sua conta.</li>
      </ul>

      <h2>Como solicitar a exclusão</h2>
      <ol>
        <li>
          Envie um e-mail para <a href={`mailto:${supportEmail}?subject=Solicitação%20de%20exclusão%20de%20dados%20-%20Onde%20Eu%20Tô%3F`}>
          {supportEmail}</a> com o assunto <strong>“Solicitação de exclusão de dados — Onde Eu Tô?”</strong>.
        </li>
        <li>No corpo do e-mail, inclua:
          <ul>
            <li>Seu <strong>nome</strong> e <strong>e-mail</strong> usado no app;</li>
            <li>Se possível, seu <strong>UID</strong> (ID do usuário) exibido no app;</li>
            <li>Confirmação de que deseja a <strong>exclusão definitiva</strong> da conta e dos dados.</li>
          </ul>
        </li>
        <li>Nós confirmaremos o recebimento e concluiremos a exclusão em até <strong>30 dias</strong>.</li>
      </ol>

      <h2>Se você fez login com o Facebook</h2>
      <p>
        Para revogar o acesso do app na sua conta do Facebook, siga:
        <br />Facebook → <strong>Configurações e privacidade</strong> → <strong>Configurações</strong> → <strong>Apps e sites</strong> →
        <strong> Conectado com o Facebook</strong> → selecione <strong>Onde Eu Tô?</strong> → <strong>Remover</strong>.
      </p>
      <p>
        <strong>Importante:</strong> remover o app do Facebook apenas revoga a permissão de acesso.
        Para apagar os dados já armazenados nos nossos servidores, envie também o pedido de exclusão pelo e-mail acima.
      </p>

      <h2>Prazo e retenção</h2>
      <ul>
        <li>Excluímos os dados ativos em até <strong>30 dias</strong> após a confirmação do pedido.</li>
        <li>Backups e logs podem persistir por até <strong>90 dias</strong> por motivos operacionais e legais, sendo então eliminados de forma segura.</li>
      </ul>

      <h2>Dúvidas</h2>
      <p>
        Caso tenha qualquer dúvida sobre a exclusão de dados, entre em contato pelo e-mail
        <a href={`mailto:${supportEmail}?subject=D%C3%BAvidas%20sobre%20exclus%C3%A3o%20de%20dados%20-%20Onde%20Eu%20T%C3%B4%3F`}> {supportEmail}</a>.
      </p>

      <div style={{ marginTop: 16 }}>
        <a
          href={`mailto:${supportEmail}?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20dados%20-%20Onde%20Eu%20T%C3%B4%3F`}
          className="button"
          style={{
            display: 'inline-block',
            padding: '12px 16px',
            borderRadius: 10,
            border: '1px solid #1d223d',
            background: '#111428',
            color: '#e8e8f0',
            textDecoration: 'none',
          }}
        >
          Solicitar exclusão por e-mail
        </a>
      </div>
    </div>
  );
}
