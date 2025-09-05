import Footer from './Footer.jsx';
import Header from './Header.jsx';

export default function Layout({ children }) {
  return (
    <div className="site">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
}
