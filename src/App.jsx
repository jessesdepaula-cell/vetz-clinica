import Navbar from './components/Navbar.jsx';
import Hero from './components/sections/Hero.jsx';
import Services from './components/sections/Services.jsx';
import Differentials from './components/sections/Differentials.jsx';
import Experience from './components/sections/Experience.jsx';
import About from './components/sections/About.jsx';
import Emergency from './components/sections/Emergency.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import FinalCTA from './components/sections/FinalCTA.jsx';
import Footer from './components/sections/Footer.jsx';

// Número e mensagem para o WhatsApp (substituir pelo número real)
export const WHATSAPP_NUMBER = '5500000000000';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma consulta na Vetz.';
export const whatsappLink = (msg = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-creme-50 text-petroleo-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
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
