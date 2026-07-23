import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import Services from './components/sections/Services.jsx';
import Products from './components/sections/Products.jsx';
import Differentials from './components/sections/Differentials.jsx';
import Experience from './components/sections/Experience.jsx';
import About from './components/sections/About.jsx';
import Emergency from './components/sections/Emergency.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import FinalCTA from './components/sections/FinalCTA.jsx';
import Footer from './components/sections/Footer.jsx';
import BrandBanner from './components/sections/BrandBanner.jsx';
import MembersArea from './pages/MembersArea.jsx';
import PreApproval from './pages/PreApproval.jsx';

// Número e mensagem para o WhatsApp (substituir pelo número real)
export const WHATSAPP_NUMBER = '5500000000000';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma consulta na Vetz.';
export const whatsappLink = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

function useHashRoute() {
  const [hash, setHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash : ''
  );
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const isMembers = hash.startsWith('#membros') || hash.startsWith('#/membros');
  const isPreApproval =
    hash.startsWith('#pre-aprovacao') || hash.startsWith('#/pre-aprovacao');

  // Garante que ao abrir uma subpágina não fique scrollado num âncora antiga
  useEffect(() => {
    if (isMembers || isPreApproval) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [isMembers, isPreApproval]);

  if (isPreApproval) {
    return <PreApproval />;
  }

  if (isMembers) {
    return <MembersArea />;
  }

  return (
    <div className="relative overflow-x-hidden bg-creme-50 text-petroleo-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <BrandBanner />
        <Differentials />
        <Experience />
        <About />
        <Emergency />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
