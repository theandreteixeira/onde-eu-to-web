import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import DeleteAccount from './pages/Exclusao.jsx';
import Home from './pages/Home.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';

export default function RoutesView() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/exclusao" element={<DeleteAccount />} />
         <Route path="/institucional" element={<Institutional />} />
      </Routes>
    </Layout>
  );
}
