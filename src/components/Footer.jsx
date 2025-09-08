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
          <span>Contato: <a href="mailto:andredesenvolvimento09@gmail.com">andredesenvolvimento09@gmail.com</a></span>
          <div className="footer-social">
            <a href="https://instagram.com/theandreteixeira" target="_blank" rel="noopener" aria-label="Instagram">Instagram</a>
          </div>
        </div>
        <div className="footer-credits">
          <span>Desenvolvido por <a href="https://instagram.com/theandreteixeira" target="_blank" rel="noopener">theandreteixeira</a></span>
        </div>
      </div>
    </footer>
  );
}
