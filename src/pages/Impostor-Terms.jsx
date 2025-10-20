

export default function ImpostorTerms() {
  return (
    <main style={container}>
      <article style={card}>
        <h1 style={h1}>Termos de Uso – Quem é o Impostor?</h1>
        <p style={muted}>Última atualização: 20 de outubro de 2025</p>

        <section>
          <h2 style={h2}>1. Uso do Aplicativo</h2>
          <ul>
            <li>O app é oferecido gratuitamente, com finalidade de entretenimento.</li>
            <li>O uso é pessoal e não comercial.</li>
            <li>
              É proibida engenharia reversa, modificação, redistribuição ou qualquer
              uso indevido do aplicativo.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>2. Propriedade Intelectual</h2>
          <p>
            Todos os direitos sobre nome, logotipo, design, conteúdo e código do
            aplicativo pertencem ao desenvolvedor. É proibida a cópia ou
            reutilização sem autorização por escrito.
          </p>
        </section>

        <section>
          <h2 style={h2}>3. Publicidade</h2>
          <p>
            O aplicativo exibe anúncios por meio de terceiros (como Google AdMob). O
            desenvolvedor não se responsabiliza pelo conteúdo, precisão ou políticas
            de privacidade de anúncios exibidos por terceiros.
          </p>
        </section>

        <section>
          <h2 style={h2}>4. Isenção de Responsabilidade</h2>
          <ul>
            <li>
              O aplicativo é fornecido “como está”, sem garantias de disponibilidade
              ou funcionamento ininterrupto.
            </li>
            <li>
              O desenvolvedor não se responsabiliza por danos diretos ou indiretos
              decorrentes do uso ou da impossibilidade de uso do aplicativo.
            </li>
          </ul>
        </section>

        <section>
          <h2 style={h2}>5. Alterações e Encerramento</h2>
          <p>
            O desenvolvedor pode atualizar ou encerrar o aplicativo a qualquer
            momento, sem aviso prévio. Alterações destes Termos podem ocorrer
            periodicamente.
          </p>
        </section>

        <section>
          <h2 style={h2}>6. Legislação Aplicável</h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil.
            Em caso de disputas, fica eleito o foro da comarca do domicílio do
            desenvolvedor.
          </p>
        </section>

        <section>
          <h2 style={h2}>7. Contato</h2>
          <p>
            Dúvidas ou solicitações:
            <br />
            <strong>Desenvolvedor:</strong> André Teixeira Silva
            <br />
            <strong>E-mail:</strong>{" "}
            <a href={`mailto:andreteixeira628@gmail.com`}>andreteixeira628@gmail.com</a>
          </p>
        </section>

        <footer style={footer}>© 2025 – Quem é o Impostor?</footer>
      </article>
    </main>
  );
}


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
const h1 = { margin: "0 0 4px", fontSize: 28 };
const h2 = { margin: "24px 0 8px", fontSize: 20 };
const muted = { color: "#9aa0a6", marginBottom: 16 };
const footer = { marginTop: 24, color: "#9aa0a6", fontSize: 14 };