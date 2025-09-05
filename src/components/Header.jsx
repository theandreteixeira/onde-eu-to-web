import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand">Onde Eu Tô?</Link>
        <nav>
          <NavLink to="/termos">Termos</NavLink>
          <NavLink to="/privacidade">Privacidade</NavLink>
        </nav>
      </div>
    </header>
  );
}
