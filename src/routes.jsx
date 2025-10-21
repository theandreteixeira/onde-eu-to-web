import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import DeleteAccount from './pages/Exclusao.jsx';
import Home from './pages/Home.jsx';
import ImpostorPrivacy from './pages/Impostor-Privacy.jsx';
import ImpostorSupport from './pages/Impostor-Support.jsx';
import ImpostorTerms from './pages/Impostor-Terms.jsx';
import Institutional from './pages/Institutional.jsx';
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
        <Route path="/impostor-privacy" element={<ImpostorPrivacy />} />
        <Route path="/impostor-terms" element={<ImpostorTerms />} />
        <Route path="/impostor-support" element={<ImpostorSupport />} />
      </Routes>
    </Layout>
  );
}
