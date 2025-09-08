export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-flex">
        <div className="footer-info">
          <small>© {new Date().getFullYear()} Onde Eu Tô? • Todos os direitos reservados</small>
          <div className="footer-links">
            <a href="/termos">Termos de Uso</a> | <a href="/privacidade">Privacidade</a> | <a href="/institucional">Institucional</a>
          </div>
        </div>
        <div className="footer-contact">
          <span>Contato: <a href="mailto:contato@ondeeu.to">contato@ondeeu.to</a></span>
          <div className="footer-social">
            <a href="https://instagram.com/ondeeu.to" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
            <span> | </span>
            <a href="https://twitter.com/ondeeuto" target="_blank" rel="noopener" aria-label="Twitter">Twitter</a>
          </div>
        </div>
        <div className="footer-credits">
          <span>Desenvolvido por <a href="https://theandreteixeira.com" target="_blank" rel="noopener">theandreteixeira</a></span>
        </div>
      </div>
    </footer>
  );
}
