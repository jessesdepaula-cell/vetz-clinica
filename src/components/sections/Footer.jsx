import { MapPin, Phone, Instagram, Clock, Mail, LogIn } from 'lucide-react';
import Wordmark from '../ui/Wordmark.jsx';

const quickLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative bg-petroleo-950 text-creme/85 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
           style={{
             backgroundImage: 'radial-gradient(circle, #f6ecd6 1px, transparent 1px)',
             backgroundSize: '24px 24px',
           }}
      />

      <div className="container-page relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Wordmark variant="creme" size="md" animated={false} />
            <p className="mt-5 text-sm leading-relaxed text-creme/70">
              Cuidado veterinário moderno, humanizado e tecnológico para cães e gatos.
            </p>
            <a
              href="#membros"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-creme/10 hover:bg-creme/20 text-creme text-xs font-semibold transition cursor-pointer border border-creme/15"
            >
              <LogIn className="w-3.5 h-3.5" />
              Área de Membros
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-creme mb-4 text-base">Links rápidos</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-creme/70 hover:text-creme transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-bold text-creme mb-4 text-base">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-aqua-300 flex-shrink-0" />
                <span className="text-creme/75">Rua dos Pets, 123 — Centro</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-aqua-300 flex-shrink-0" />
                <a href="https://wa.me/5500000000000" className="text-creme/75 hover:text-creme transition cursor-pointer">
                  (00) 00000-0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 mt-0.5 text-aqua-300 flex-shrink-0" />
                <a href="https://instagram.com/vetz.vet" target="_blank" rel="noopener noreferrer"
                   className="text-creme/75 hover:text-creme transition cursor-pointer">
                  @vetz.vet
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 mt-0.5 text-aqua-300 flex-shrink-0" />
                <a href="mailto:contato@vetz.vet" className="text-creme/75 hover:text-creme transition cursor-pointer">
                  contato@vetz.vet
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4 className="font-display font-bold text-creme mb-4 text-base">Horário</h4>
            <div className="flex items-start gap-2.5 text-sm">
              <Clock className="w-4 h-4 mt-0.5 text-aqua-300 flex-shrink-0" />
              <div className="text-creme/75 leading-relaxed">
                <div>Segunda a sábado</div>
                <div className="font-semibold text-creme">das 8h às 18h</div>
                <div className="mt-2 text-xs text-aqua-200">
                  Emergência 24h pelo WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória + copyright */}
        <div className="pt-8 border-t border-creme/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-creme/60">
          <p>© 2026 Vetz. Todos os direitos reservados.</p>
          <p>Feito com <span className="text-red-400">♥</span> para tutores e seus pets.</p>
        </div>

        {/* Crédito do desenvolvedor */}
        <div className="mt-4 text-center text-xs text-creme/50">
          <p>
            Site desenvolvido por{' '}
            <a
              href="https://bilytech.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-aqua-300 hover:text-aqua-200 transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              BilyTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
