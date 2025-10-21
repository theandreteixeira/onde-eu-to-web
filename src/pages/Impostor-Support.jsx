
const APP_NAME = "Quem é o Impostor?";
const SUPPORT_EMAIL = "andredesenvolvimento09@gmail.com"; 
const PRIVACY_URL = "https://ondeeuto.online/impostor-privacy";
const TERMS_URL = "https://ondeeuto.online/impostor-terms";

export default function SupportPage() {
  return (
    <main style={container}>
      <article style={card}>
        <header style={header}>
          <h1 style={title}>Suporte — {APP_NAME}</h1>
          <p style={muted}>
            Precisa de ajuda? Veja as respostas rápidas abaixo ou fale com a gente.
          </p>
        </header>

        <section style={section}>
          <h2 style={h2}>Contato</h2>
          <p>
            E-mail:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} style={link}>
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            Responderemos o quanto antes, normalmente em até 2 dias úteis.
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>Perguntas Frequentes (FAQ)</h2>
          <details style={details}>
            <summary style={summary}>O jogo funciona offline?</summary>
            <p>Sim. Você pode jogar totalmente offline com seus amigos.</p>
          </details>
          <details style={details}>
            <summary style={summary}>Como jogar?</summary>
            <p>
              Escolha um tema, defina o número de jogadores e inicie. Cada
              jogador vê uma carta com a palavra secreta, exceto o impostor,
              que tenta adivinhar sem ser descoberto.
            </p>
          </details>
          <details style={details}>
            <summary style={summary}>Tem anúncios?</summary>
            <p>
              Sim, utilizamos anúncios sutis para manter o app gratuito. Consulte
              nossa política de privacidade para saber mais.
            </p>
          </details>
          <details style={details}>
            <summary style={summary}>Como reportar um problema ou sugerir melhorias?</summary>
            <p>
              Envie um e-mail para{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} style={link}>
                {SUPPORT_EMAIL}
              </a>{" "}
              com: descrição do problema, passos para reproduzir, modelo do dispositivo e versão do iOS.
            </p>
          </details>
        </section>

        <section style={section}>
          <h2 style={h2}>Solução de Problemas</h2>
          <ul style={ul}>
            <li>Reinicie o app e, se possível, o dispositivo.</li>
            <li>Verifique se há atualização disponível na App Store.</li>
            <li>Confirme permissões de internet se estiver abrindo links (políticas/termos).</li>
            <li>Reinstale o app caso o problema persista.</li>
          </ul>
        </section>

        <section style={section}>
          <h2 style={h2}>Compatibilidade</h2>
          <p>
            iPhone com iOS recente (verifique na App Store a versão mínima suportada).
          </p>
        </section>

        <section style={section}>
          <h2 style={h2}>Políticas</h2>
          <p>
            <a href={PRIVACY_URL} style={link} target="_blank" rel="noreferrer">
              Política de Privacidade
            </a>{" "}
            ·{" "}
            <a href={TERMS_URL} style={link} target="_blank" rel="noreferrer">
              Termos de Uso
            </a>
          </p>
        </section>

        <footer style={footer}>
          © {new Date().getFullYear()} {APP_NAME} — Todos os direitos reservados.
        </footer>
      </article>
    </main>
  );
}

/* styles */
const container = {
  display: "flex",
  justifyContent: "center",
  padding: "40px 16px",
  background: "#0b0b0c",
  minHeight: "100vh",
};
const card = {
  maxWidth: 840,
  width: "100%",
  background: "#121214",
  color: "#eaeaea",
  borderRadius: 12,
  padding: 24,
  boxShadow: "0 8px 24px rgba(0,0,0,.35)",
  lineHeight: 1.6,
};
const header = { marginBottom: 16 };
const title = { margin: 0, fontSize: 28 };
const muted = { color: "#9aa0a6" };
const section = { marginTop: 24 };
const h2 = { margin: "0 0 8px", fontSize: 20 };
const ul = { paddingLeft: 18, margin: "8px 0" };
const footer = { marginTop: 24, color: "#9aa0a6", fontSize: 14 };
const link = { color: "#86b7ff", textDecoration: "underline" };
const details = {
  background: "#1a1a1b",
  padding: "12px 14px",
  borderRadius: 8,
  margin: "8px 0",
  border: "1px solid #2a2a2b",
};
const summary = { cursor: "pointer", fontWeight: 600 };
