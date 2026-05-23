import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import Logo from './ui/Logo.jsx';
import { whatsappLink } from '../App.jsx';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ${
        scrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div
        className={`container-page flex items-center justify-between gap-6 rounded-full transition-all duration-500
          ${scrolled
            ? 'bg-white/85 backdrop-blur-xl border border-petroleo-100 shadow-soft py-2.5 px-4 sm:px-6'
            : 'bg-white/40 backdrop-blur-md border border-white/60 py-3 px-4 sm:px-6'
          }`}
      >
        <a href="#inicio" aria-label="Vetz - Página inicial" className="cursor-pointer">
          <Logo size="sm" />
        </a>

        {/* Links desktop */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3.5 py-2 text-sm font-medium text-petroleo-800
                         hover:text-petroleo-600 transition-colors duration-200
                         rounded-full group cursor-pointer"
            >
              {l.label}
              <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 bg-aqua-400 scale-x-0
                               group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                       bg-petroleo-700 hover:bg-petroleo-600 text-creme text-sm font-semibold
                       shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Agendar
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-full bg-white/70 border border-petroleo-100
                       text-petroleo-800 hover:bg-white transition cursor-pointer"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-3 mx-auto container-page"
            aria-label="Menu mobile"
          >
            <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-petroleo-100 shadow-card p-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-2xl text-petroleo-800 font-medium
                                 hover:bg-petroleo-50 transition cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block text-center px-4 py-3 rounded-2xl bg-petroleo-700 text-creme font-semibold cursor-pointer"
                  >
                    Agendar pelo WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
