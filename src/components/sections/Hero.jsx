import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import PetScene from '../three/PetScene.jsx';
import { whatsappLink } from '../../App.jsx';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-28 sm:pt-32 pb-20 lg:pb-32 overflow-hidden bg-hero-radial"
    >
      {/* Gradiente animado de fundo (discreto) */}
      <div className="absolute inset-0 bg-animated-gradient opacity-50 pointer-events-none" />

      {/* Blobs decorativos */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-aqua-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 -right-40 w-[28rem] h-[28rem] bg-creme-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container-page relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Texto */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              Cuidado veterinário moderno
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display font-extrabold text-petroleo-900
                       text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] leading-[1.05] tracking-tight"
          >
            Cuidado veterinário moderno para{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-petroleo-700 to-aqua-500 bg-clip-text text-transparent">
                quem ama
              </span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-creme-200 -z-0 rounded-full" />
            </span>{' '}
            seu pet de verdade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-petroleo-700/85 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Na <strong className="text-petroleo-800">Vetz</strong>, seu pet recebe atendimento humanizado,
            tecnologia, carinho e segurança em cada consulta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>

            <a href="#servicos" className="btn-secondary">
              Conhecer serviços
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Mini-stats sociais */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {[
              { n: '+5.000', l: 'pets atendidos' },
              { n: '4.9★', l: 'avaliação média' },
              { n: '24/7', l: 'orientação WhatsApp' },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="font-display font-bold text-2xl text-petroleo-800">{s.n}</div>
                <div className="text-xs text-petroleo-600 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cena 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="relative h-[420px] sm:h-[500px] lg:h-[580px] drop-shadow-3d"
        >
          {/* Halo de fundo */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-aqua-200/60 via-creme-100/60 to-petroleo-100/40 blur-2xl" />
          <PetScene />

          {/* Badges flutuantes 2D */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-6 right-2 sm:right-6 card-3d px-4 py-2.5 flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-petroleo-800">Online agora</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 left-0 sm:left-4 card-3d px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-petroleo-100 flex items-center justify-center text-petroleo-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-petroleo-600 uppercase tracking-wider font-semibold">Novo</div>
                <div className="text-sm font-display font-bold text-petroleo-800">Check-up completo</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Onda divisória inferior */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
          <path
            d="M0,40 C320,90 720,0 1440,50 L1440,80 L0,80 Z"
            fill="#fdfaf3"
          />
        </svg>
      </div>
    </section>
  );
}
