import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header elegant-header">
      <div className="container header-flex">
        <Link to="/" className="brand">
          <img src="/icon_app.png" alt="Logo" className="header-logo" />
          Onde Eu Tô?
        </Link>
        <nav>
          <NavLink to="/institucional" className="header-link">Institucional</NavLink>
          <NavLink to="/termos" className="header-link">Termos</NavLink>
          <NavLink to="/privacidade" className="header-link">Privacidade</NavLink>
          <NavLink to="/exclusao" className="header-link">Exclusão</NavLink>
        </nav>
      </div>
    </header>
  );
}
