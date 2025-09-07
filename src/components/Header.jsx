import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand">Onde Eu Tô?</Link>
        <nav>
          <NavLink to="/institucional">Institucional</NavLink>
          <NavLink to="/termos">Termos</NavLink>
          <NavLink to="/privacidade">Privacidade</NavLink>
          <NavLink to="/exclusao">Exclusão</NavLink>
        </nav>
      </div>
    </header>
  );
}
