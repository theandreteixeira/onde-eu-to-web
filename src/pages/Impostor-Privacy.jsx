const APP_NAME = 'Quem é o Impostor?';
const DEVELOPER_NAME = 'André Teixeira';
const DEVELOPER_EMAIL = 'andreteixeira628@gmail.com';
const ADMOB_POLICY_URL = 'https://policies.google.com/technologies/ads';
import { Helmet } from 'react-helmet-async';

export default function ImpostorPrivacy() {
  return (
    <main style={container}>
      <article style={card}>
        <Helmet>
          <title>Política de Privacidade — {APP_NAME}</title>
          <meta
            name="description"
            content="Política de Privacidade do aplicativo {APP_NAME}."
          />
        </Helmet>

        <h1>Política de Privacidade</h1>
        <p>Última atualização: 20/08/2025</p>

        <section>
          <h2 style={h2}>1. Coleta de Informações</h2>
          <p>
            O aplicativo <strong>{APP_NAME}</strong> não solicita nem coleta
            dados pessoais diretamente (como nome, e-mail, localização ou
            contatos).
          </p>
          <p>
            No entanto, utilizamos serviços de terceiros, em especial o{' '}
            <strong>Google AdMob</strong>, que podem coletar automaticamente
            identificadores de dispositivo e dados de uso para exibição de
            anúncios. Esses dados podem incluir:
          </p>
          <ul>
            <li>Identificador de publicidade (IDFA/GAID);</li>
            <li>Informações de uso e desempenho do app;</li>
            <li>
              Dados relacionados a anúncios exibidos (impressões e cliques).
            </li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>2. Uso das Informações</h2>
          <p>
            As informações coletadas automaticamente são utilizadas
            exclusivamente para exibição e personalização de anúncios via AdMob.
            O desenvolvedor não armazena, compartilha ou vende dados de
            usuários.
          </p>
        </section>

        <section>
          <h2 style={h2}>3. Serviços de Terceiros</h2>
          <p>
            Consulte a política do AdMob para entender como seus dados podem ser
            tratados:
          </p>
          <p>
            <a href={ADMOB_POLICY_URL} target="_blank" rel="noreferrer">
              {ADMOB_POLICY_URL}
            </a>
          </p>
        </section>

        <section>
          <h2 style={h2}>4. Segurança</h2>
          <p>
            Não coletamos nem mantemos dados pessoais em servidores próprios. As
            informações tratadas por serviços de terceiros seguem as práticas de
            segurança desses provedores.
          </p>
        </section>

        <section>
          <h2 style={h2}>5. Privacidade de Crianças</h2>
          <p>
            O aplicativo não é direcionado a menores de 13 anos. O uso por
            crianças deve ocorrer sob supervisão de um responsável, quando
            aplicável.
          </p>
        </section>

        <section>
          <h2 style={h2}>6. Alterações desta Política</h2>
          <p>
            Esta Política pode ser atualizada periodicamente. A data de revisão
            aparece no topo desta página.
          </p>
        </section>

        <section>
          <h2 style={h2}>7. Contato</h2>
          <p>
            Dúvidas sobre esta Política de Privacidade:
            <br />
            <strong>Desenvolvedor:</strong> {DEVELOPER_NAME}
            <br />
            <strong>E-mail:</strong>{' '}
            <a href={`mailto:${DEVELOPER_EMAIL}`}>{DEVELOPER_EMAIL}</a>
          </p>
        </section>

        <footer style={footer}>© 2025 – {APP_NAME}</footer>
      </article>
    </main>
  );
}

const container = {
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 16px',
  background: '#0b0b0c',
  minHeight: '100vh'
};
const card = {
  maxWidth: 840,
  width: '100%',
  background: '#121214',
  color: '#eaeaea',
  borderRadius: 12,
  padding: 24,
  boxShadow: '0 8px 24px rgba(0,0,0,.35)',
  lineHeight: 1.6
};
const h2 = { margin: '24px 0 8px', fontSize: 20 };
const footer = { marginTop: 24, color: '#9aa0a6', fontSize: 14 };
